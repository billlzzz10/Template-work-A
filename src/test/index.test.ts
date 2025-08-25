import { run, processInput } from '../index';

// Mock @actions/core
const mockCore = {
  getInput: jest.fn(),
  setOutput: jest.fn(),
  info: jest.fn(),
  setFailed: jest.fn()
};

// Mock @actions/github
const mockGithub = {
  context: {
    repo: {
      owner: 'test-owner',
      repo: 'test-repo'
    }
  }
};

// Mock the modules
jest.mock('@actions/core', () => mockCore);
jest.mock('@actions/github', () => mockGithub);

describe('GitHub Action Template (TypeScript)', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe('processInput', () => {
    it('should process input parameter correctly', () => {
      const result = processInput('test input');
      expect(result).toContain('Processed: test input');
      expect(result).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/); // ISO timestamp
    });

    it('should include optional parameter when provided', () => {
      const result = processInput('test input', 'optional value');
      expect(result).toContain('Processed: test input');
      expect(result).toContain('with optional: optional value');
    });

    it('should handle empty optional parameter', () => {
      const result = processInput('test input', '');
      expect(result).toContain('Processed: test input');
      expect(result).not.toContain('with optional:');
    });

    it('should handle undefined optional parameter', () => {
      const result = processInput('test input', undefined as any);
      expect(result).toContain('Processed: test input');
      expect(result).not.toContain('with optional:');
    });
  });

  describe('run', () => {
    it('should execute successfully with valid inputs', async () => {
      // Mock successful input retrieval
      mockCore.getInput
        .mockReturnValueOnce('test value') // input-parameter
        .mockReturnValueOnce('optional value'); // optional-parameter

      await run();

      // Verify core functions were called correctly
      expect(mockCore.getInput).toHaveBeenCalledWith('input-parameter', { required: true });
      expect(mockCore.getInput).toHaveBeenCalledWith('optional-parameter', { required: false });
      expect(mockCore.setOutput).toHaveBeenCalledWith('output-parameter', expect.stringContaining('Processed: test value'));
      expect(mockCore.info).toHaveBeenCalledWith('✅ Action completed successfully!');
    });

    it('should handle missing required input', async () => {
      // Mock missing required input
      mockCore.getInput
        .mockImplementation((name: string, options: any) => {
          if (name === 'input-parameter' && options.required) {
            throw new Error('Input required and not supplied: input-parameter');
          }
          return '';
        });

      await run();

      expect(mockCore.setFailed).toHaveBeenCalledWith(expect.stringContaining('❌ Action failed'));
    });

    it('should handle processing errors', async () => {
      // Mock successful input retrieval but processing error
      mockCore.getInput
        .mockReturnValueOnce('test value')
        .mockReturnValueOnce('');

      // Mock setOutput to throw an error
      mockCore.setOutput.mockImplementation(() => {
        throw new Error('Processing failed');
      });

      await run();

      expect(mockCore.setFailed).toHaveBeenCalledWith('❌ Action failed: Processing failed');
    });

    it('should handle non-Error exceptions', async () => {
      // Mock successful input retrieval but processing error
      mockCore.getInput
        .mockReturnValueOnce('test value')
        .mockReturnValueOnce('');

      // Mock setOutput to throw a non-Error
      mockCore.setOutput.mockImplementation(() => {
        throw 'String error';
      });

      await run();

      expect(mockCore.setFailed).toHaveBeenCalledWith('❌ Action failed: Unknown error occurred');
    });
  });
});
