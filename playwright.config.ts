import { defineConfig, devices } from '@playwright/test'

const configuredBaseURL =
  process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:3000'
const base = new URL(configuredBaseURL)
if (!base.port) base.port = '3000'
const baseURL = base.toString().replace(/\/$/, '')
const serverHost = base.hostname
const serverPort = base.port

export default defineConfig({
  testDir: '__tests__/ui',
  testMatch: '*.test.ts',
  fullyParallel: false,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: process.env.CI
    ? [
        ['github'],
        ['html', { open: 'never', outputFolder: 'reports/playwright/html' }],
        ['junit', { outputFile: 'reports/playwright/junit.xml' }]
      ]
    : [
        ['list'],
        ['html', { open: 'never', outputFolder: 'reports/playwright/html' }],
        ['junit', { outputFile: 'reports/playwright/junit.xml' }]
      ],
  outputDir: 'reports/playwright/artifacts',
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'desktop-chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'mobile-chromium',
      use: { ...devices['Pixel 5'] }
    }
  ],
  webServer: {
    command: `pnpm exec next dev --hostname ${serverHost} --port ${serverPort}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  },
  timeout: 30_000,
  expect: { timeout: 10_000 }
})
