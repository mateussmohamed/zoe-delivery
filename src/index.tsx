import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './modules/App'

import './styles.module.css'

var mountNode = document.getElementById('app')

ReactDOM.render(<App name="Zoe Delivery" />, mountNode)
