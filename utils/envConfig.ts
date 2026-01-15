import * as environments from '../data/environments.json';

// Define the available environment keys
type envConfig = 'dev' | 'staging' | 'prod';

// Get the environment from the system variable, default to 'staging'
const currentEnv = (process.env.APP_ENV as envConfig) || 'staging';

// Export the configuration for the current environment
export const ENV_CONFIG = {
  BASE_URL: environments[currentEnv].baseURL,
  API_URL: environments[currentEnv].apiURL,
  NAME: currentEnv,
};
