import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'

interface Props {
  name: string
}

const App: FC<Props> = ({ name }) => <h1>{name}</h1>

export default hot(App)
