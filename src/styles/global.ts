import { createGlobalStyle } from 'styled-components'

import { normalize } from 'polished'

export default createGlobalStyle`
  ${normalize()}

  * {
    margin: 0;
    padding: 0;
    box-sizing:  border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    background-color: ${(props): string => props.theme.colors.background}
  }
  `
