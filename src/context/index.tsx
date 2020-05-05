import React, { createContext, useReducer, Dispatch, FC } from 'react'

import { INITIAL_STATE, InitialStateType, bagReducer, customerReducer, ZoeActions } from './reducers'

const ZoeContext = createContext<{
  state: InitialStateType
  dispatch: Dispatch<ZoeActions>
}>({
  state: INITIAL_STATE,
  dispatch: () => null
})

const mainReducer = ({ bag, customer }: InitialStateType, action: ZoeActions): any => ({
  bag: bagReducer(bag, action),
  customer: customerReducer(customer, action)
})

const ZoeProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, INITIAL_STATE)

  return <ZoeContext.Provider value={{ state, dispatch }}>{children}</ZoeContext.Provider>
}

export { ZoeProvider, ZoeContext }
