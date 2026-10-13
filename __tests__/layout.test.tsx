import { renderToStaticMarkup } from 'react-dom/server'
import { expect, test, vi } from 'vitest'

import RootLayout from '@/app/layout'

vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: 'geist-sans' }),
  Geist_Mono: () => ({ variable: 'geist-mono' })
}))

test('renders the root document and its children', () => {
  const markup = renderToStaticMarkup(
    <RootLayout params={Promise.resolve({})}>
      <main>Content</main>
    </RootLayout>
  )

  expect(markup).toContain(
    '<html lang="en" class="geist-sans geist-mono h-full antialiased">'
  )
  expect(markup).toContain(
    '<body class="min-h-full flex flex-col"><main>Content</main></body>'
  )
})
