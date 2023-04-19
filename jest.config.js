// module.exports = {
//     verbose: true,
//     roots: ['<rootDir>/src'],
//     testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
//     moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//     moduleNameMapper: {
//       '^@/(.*)$': '<rootDir>/src/$1',
//     },
//   };
  
const nextJest = require("next/jest");

const customJestConfig = {
moduleDirectories: ["node_modules", "<rootDir>/"],
testEnvironment: 'jest-environment-jsdom',
};

const createJestConfig = nextJest({
dir: "./",
})(customJestConfig);

module.exports = async () => {
// Create Next.js jest configuration presets
const jestConfig = await createJestConfig();

// Custom `moduleNameMapper` configuration
const moduleNameMapper = {
...jestConfig.moduleNameMapper,
"^@/(.*)$": "<rootDir>/src/$1",
};

return { ...jestConfig, moduleNameMapper };
};