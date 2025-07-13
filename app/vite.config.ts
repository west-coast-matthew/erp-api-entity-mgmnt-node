import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from "path";

export default defineConfig({
  plugins: [
    //react(),             // Omit if not using React
    tsconfigPaths(),     // Optional: resolves tsconfig path aliases
  ],
  resolve: {
    
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build:{
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/app.ts'), // Set the entry point to your app.ts file
      name: 'MyApp', // Replace with your desired library name
      fileName: (format) => `app.${format}.js`, // Customize the output file name
      formats: ['es', 'cjs'] // Specify the desired output formats
    },
    rollupOptions: {
      // Configure Rollup options if needed (e.g., externalize dependencies)
      external: ['express'] // Example: Externalize the 'express' dependency
    }
  },
  
  server:{
    port: 5176
  }
})
