import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { createMockClient } from 'mock-apollo-client'
import { render, fireEvent, waitFor, RenderResult } from 'test-utils'

import { ZoeContext } from '~/context'
import allCategories from '~/__tests__/__mocks__/allCategory'
import pocProducts from '~/__tests__/__mocks__/pocProducts'
import Products from '~/modules/products'
import POC_PRODUCTS_QUERY from '~/modules/products/graphql/pocProducts'
import ALL_CATEGORIES_QUERY from '~/modules/products/graphql/allCategories'

const pushMock = jest.fn()

const currentPathname = '/products'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(() => ({
    location: {
      pathname: currentPathname
    },
    push: pushMock
  })),
  useParams: () => ({ categoryId: '' })
}))

type Overrides = {
  pocProducts?: object | undefined
  allCategories?: object | undefined
  mockDispatch?: () => {} | undefined
  mockState?: object | undefined
}

const mockDispatch = jest.fn()
const mockState = {
  bag: {
    isOpen: false,
    products: [],
    amountToPay: 0,
    amountItems: 0,
    fixedFreight: 6.9
  }
}

function setup(overrides?: Overrides): RenderResult {
  const pocProductsHandler = jest.fn().mockResolvedValue(overrides?.pocProducts || pocProducts)
  const pocCategoriesHandler = jest.fn().mockResolvedValue(overrides?.allCategories || allCategories)

  const mockClient = createMockClient()

  mockClient.setRequestHandler(POC_PRODUCTS_QUERY, pocProductsHandler)
  mockClient.setRequestHandler(ALL_CATEGORIES_QUERY, pocCategoriesHandler)

  return render(
    <ApolloProvider client={mockClient}>
      <ZoeContext.Provider
        value={{
          state: Object.assign(mockState, overrides?.mockState),
          dispatch: overrides?.mockDispatch || mockDispatch
        }}
      >
        <Products />
      </ZoeContext.Provider>
    </ApolloProvider>
  )
}

describe('<Products />', () => {
  describe('when the products page is opened', () => {
    test('it should render the page with products and without filters', async () => {
      const { queryByTestId, findByTestId } = setup()

      expect(queryByTestId('zoe-loading')).toBeTruthy()
      await waitFor(() => expect(findByTestId('zoe-categories')).toBeTruthy())
      await waitFor(() => expect(findByTestId('zoe-products')).toBeTruthy())
      await waitFor(() => expect(queryByTestId('zoe-loading')).toBeFalsy())
    })

    test('it should display the category "Todos" how active', async () => {
      const { findByTestId } = setup()

      await waitFor(async () => {
        const allCategoryBtn = await findByTestId('zoe-categories-item-btn-all')

        expect(allCategoryBtn).toBeTruthy()
        expect(allCategoryBtn.getAttribute('data-isactive')).toBe('true')
      })
    })
  })

  describe('when the customer fired a category filter button', () => {
    test('it should render the page with filtered products by selected category', async () => {
      const { findAllByTestId } = setup()

      await waitFor(async () => {
        const filterButtons = await findAllByTestId('zoe-categories-item-btn')

        fireEvent.click(filterButtons[0])

        expect(pushMock).toBeCalledWith('/products/category/94')

        fireEvent.click(filterButtons[3])

        expect(pushMock).toBeCalledWith('/products/category/96')

        fireEvent.click(filterButtons[4])

        expect(pushMock).toBeCalledWith('/products/category/97')
      })
    })

    test('it should render the products page after fired filter "Todos"', async () => {
      const { findByTestId } = setup()

      await waitFor(async () => {
        const filterButtons = await findByTestId('zoe-categories-item-btn-all')

        fireEvent.click(filterButtons)

        expect(pushMock).toBeCalledWith('/products')
      })
    })

    test('it should render a Message if a category hasn"t products', async () => {
      const pocProductsEmpty = {
        loading: false,
        data: {
          poc: {
            id: '532',
            products: []
          }
        }
      }

      const { findAllByTestId, findByTestId } = setup({ pocProducts: pocProductsEmpty })

      await waitFor(async () => {
        const filterButtons = await findAllByTestId('zoe-categories-item-btn')

        fireEvent.click(filterButtons[1])

        expect(pushMock).toBeCalled()
        expect(pushMock).toBeCalledWith(`/products/category/95`)
      })

      await waitFor(async () => {
        const message = await findByTestId('zoe-message')
        const text = await findByTestId('zoe-message-text')

        expect(message).toBeTruthy()
        expect(text.textContent).toBe('Parece que os produtos que você pesquisou foram abduzidos!')
      })
    })
  })

  describe('when the customer clicks add to bag button', () => {
    test('it should sum over count number in Bag', async () => {
      const { findAllByTestId } = setup()

      await waitFor(async () => {
        const productsAddBtn = await findAllByTestId('zoe-product-btn-add')

        fireEvent.click(productsAddBtn[3])

        expect(mockDispatch).toBeCalled()
        expect(mockDispatch).toBeCalledWith({
          type: 'ADD_PRODUCT',
          payload: pocProducts.data.poc.products[3]
        })
      })
    })
  })
})
