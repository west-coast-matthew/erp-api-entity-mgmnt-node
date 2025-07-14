        // tsconfig-paths-bootstrap.js
        const tsConfig = require('./tsconfig.json');
        const tsConfigPaths = require('tsconfig-paths');
        const baseUrl = './dist'; // Or your compiled output directory

        tsConfigPaths.register({
          baseUrl,
          paths: tsConfig.compilerOptions.paths,
        });