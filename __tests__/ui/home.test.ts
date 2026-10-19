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

  const donut = page.getByRole('img', { name: 'Donut', exact: true })
  await expect(donut).toBeVisible()
  await expect
    .poll(() => donut.evaluate((image: HTMLImageElement) => image.naturalWidth))
    .toBeGreaterThan(0)

  const donutBounds = await donut.boundingBox()
  const logoBounds = await page
    .getByRole('img', { name: 'Vercel logomark' })
    .boundingBox()
  const mainBounds = await page.getByRole('main').boundingBox()

  expect(donutBounds).not.toBeNull()
  expect(logoBounds).not.toBeNull()
  expect(mainBounds).not.toBeNull()
  if (!donutBounds || !logoBounds || !mainBounds) {
    throw new Error('Expected home page images and main content to have bounds')
  }

  expect(donutBounds.y).toBeGreaterThan(logoBounds.y + logoBounds.height)
  expect(
    Math.abs(
      donutBounds.x +
        donutBounds.width / 2 -
        (mainBounds.x + mainBounds.width / 2)
    )
  ).toBeLessThanOrEqual(1)
})
