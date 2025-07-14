import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/app.ts'],
  outDir: 'dist',
  target: 'es2022',
  format: ['esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: false,
  //bundle: false,
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.cjs',
    };
  },
  external: [
    'winston', 
    'colors', 
    '@colors/colors', 
    'logform', 
    'util'
  ],
   watch: true,
  ignoreWatch: ['**/.git/**', '**/node_modules/**', 'dist']
});
