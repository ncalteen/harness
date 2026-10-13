import { expect, test } from '@playwright/test'

test('renders the home page and its primary links', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { level: 1, name: /to get started/i })
  ).toBeVisible()
  await expect(page.getByRole('img', { name: 'Next.js logo' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Deploy Now' })).toHaveAttribute(
    'href',
    /vercel\.com\/new/
  )
  await expect(
    page.getByRole('link', { name: 'Documentation' })
  ).toHaveAttribute('href', /nextjs\.org\/docs/)
})
