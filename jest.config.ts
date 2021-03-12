import { pathsToModuleNameMapper } from 'ts-jest/utils';
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
import { compilerOptions } from './tsconfig.test.json';

export default {
    preset: 'ts-jest',
    modulePathIgnorePatterns: ['dist'],
    testPathIgnorePatterns: ['node_modules', 'dist'],
    testRegex: '(\\.(test|spec))\\.(ts|tsx)$',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json'
        }
    },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
};
