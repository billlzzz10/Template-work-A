import * as core from '@actions/core';
import * as github from '@actions/github';

/**
 * GitHub Action Template - Main Entry Point (TypeScript)
 * 
 * This is a template for creating GitHub Actions with TypeScript support.
 * Customize this file to implement your specific action logic.
 * 
 * @example
 * // Basic usage in workflow:
 * - name: Run Template Action
 *   uses: yourusername/github-action-template@v1
 *   with:
 *     input-parameter: 'your value'
 *     optional-parameter: 'optional value'
 */
async function run(): Promise<void> {
  try {
    // Get inputs from the workflow
    const inputParameter = core.getInput('input-parameter', { required: true });
    const optionalParameter = core.getInput('optional-parameter', { required: false });
    
    // Log the inputs for debugging
    core.info(`Input parameter: ${inputParameter}`);
    if (optionalParameter) {
      core.info(`Optional parameter: ${optionalParameter}`);
    }
    
    // TODO: Add your custom logic here
    // Example: Process the input, make API calls, etc.
    const result = processInput(inputParameter, optionalParameter);
    
    // Set output for other steps in the workflow
    core.setOutput('output-parameter', result);
    
    // Log success message
    core.info('✅ Action completed successfully!');
    
  } catch (error) {
    // Handle errors and fail the action
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    core.setFailed(`❌ Action failed: ${errorMessage}`);
  }
}

/**
 * Process the input parameters
 * Customize this function to implement your specific logic
 * 
 * @param input - Required input parameter
 * @param optional - Optional input parameter
 * @returns Processed result
 */
function processInput(input: string, optional: string = ''): string {
  // TODO: Replace this with your actual processing logic
  const timestamp = new Date().toISOString();
  const result = `Processed: ${input} at ${timestamp}`;
  
  if (optional) {
    return `${result} (with optional: ${optional})`;
  }
  
  return result;
}

// Export for testing
export { run, processInput };

// Run the action if this file is executed directly
if (require.main === module) {
  run();
}
