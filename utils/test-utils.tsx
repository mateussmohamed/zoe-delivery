import React, { FC } from 'react'
import { render, RenderResult, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'

import theme from '../src/styles/themes/default'

console.error = jest.fn()

const AllTheProviders: FC = ({ children }) => {
  const history = createMemoryHistory()

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Router>
  )
}

const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
