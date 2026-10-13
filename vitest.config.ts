import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    tsconfigPaths: true
  },
  test: {
    environment: 'node',
    silent: 'passed-only',
    clearMocks: true,
    include: ['__tests__/**/*.test.{ts,tsx}'],
    exclude: [
      '.next',
      // Exclude integration and UI tests from unit test runs
      '__tests__/integration/**',
      '__tests__/ui/**',
      'local',
      'node_modules',
      'out'
    ],
    coverage: {
      enabled: true,
      provider: 'v8',
      reportsDirectory: 'coverage',
      reporter: ['json-summary', 'json', 'html', 'lcov', 'text'],
      include: ['app/**/*.{ts,tsx}'],
      exclude: ['.next', 'dist', 'node_modules'],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80
      }
    },
    reporters: ['default', 'junit'],
    outputFile: {
      junit: './reports/junit.xml'
    }
  },
  plugins: [react()]
})
