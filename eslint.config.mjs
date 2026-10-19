import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    'node_modules/**',
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'reports/**',
    'next-env.d.ts',
    'playwright.harness.config.ts',
    'playwright.harness.resolve.ts',
    'kubernetes/service/**'
  ])
])

export default eslintConfig
