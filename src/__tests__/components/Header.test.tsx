import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { render } from 'test-utils'

import { ZoeProvider, ZoeContext } from '~/context'

import Header from '~/components/Header'

const history = createMemoryHistory()

// const pushMock = jest.fn()
// jest.mock('react-router-dom', () => ({
//   useHistory: () => ({
//     push: pushMock
//   })
// }))

describe('<Header />', () => {
  test('renders correctly', async () => {
    const { getByTestId } = render(
      <Router history={history}>
        <ZoeProvider>
          <Header />
        </ZoeProvider>
      </Router>
    )

    const header = getByTestId('zoe-header')
    const image = getByTestId('zoe-logo')
    const title = getByTestId('zoe-logo-title')
    const subTitle = getByTestId('zoe-logo-subtitle')

    expect(header).toBeDefined()
    expect(image).toBeDefined()
    expect(title).toBeDefined()
    expect(subTitle).toBeDefined()
  })

  // describe('when customer click', () => {
  //   test('renders correctly', async () => {
  //     const { getByTestId } = render(
  //       <Router history={history}>
  //         <ZoeProvider>
  //           <Header />
  //         </ZoeProvider>
  //       </Router>
  //     )

  //     expect(subTitle).toBeDefined()
  //   })
  // })
})
