import React, { createContext, useReducer, Dispatch, FC } from 'react'

import { bagReducer, BagActions } from './reducers'

const initialState = {
  bag: {
    products: [],
    total: 0
  }
}

type InitialStateType = typeof initialState

const ZoeContext = createContext<{
  state: InitialStateType
  dispatch: Dispatch<BagActions>
}>({
  state: initialState,
  dispatch: () => null
})

const mainReducer = ({ bag }: InitialStateType, action: BagActions): any => ({
  bag: bagReducer(bag, action)
})

const ZoeProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return <ZoeContext.Provider value={{ state, dispatch }}>{children}</ZoeContext.Provider>
}

export { ZoeProvider, ZoeContext }
