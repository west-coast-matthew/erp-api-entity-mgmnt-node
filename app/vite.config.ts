import { defineConfig } from 'vitest/config'

//import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
    react(),             // Omit if not using React
    //tsconfigPaths(),     // Optional: resolves tsconfig path aliases
  ],
  test: {
    globals: true,
    environment: 'jsdom',  // use 'node' if you're not testing browser APIs
    include: ['tests/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  server:{
    port: 5176
  }
})
