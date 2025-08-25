const core = require('@actions/core');
const github = require('@actions/github');

/**
 * GitHub Action Template - Main Entry Point
 * 
 * This is a template for creating GitHub Actions. Customize this file
 * to implement your specific action logic.
 * 
 * @example
 * // Basic usage in workflow:
 * - name: Run Template Action
 *   uses: yourusername/github-action-template@v1
 *   with:
 *     input-parameter: 'your value'
 *     optional-parameter: 'optional value'
 */
async function run() {
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
    core.setFailed(`❌ Action failed: ${error.message}`);
  }
}

/**
 * Process the input parameters
 * Customize this function to implement your specific logic
 * 
 * @param {string} input - Required input parameter
 * @param {string} optional - Optional input parameter
 * @returns {string} Processed result
 */
function processInput(input, optional = '') {
  // TODO: Replace this with your actual processing logic
  const timestamp = new Date().toISOString();
  const result = `Processed: ${input} at ${timestamp}`;
  
  if (optional) {
    return `${result} (with optional: ${optional})`;
  }
  
  return result;
}

// Export for testing
module.exports = { run, processInput };

// Run the action if this file is executed directly
if (require.main === module) {
  run();
}