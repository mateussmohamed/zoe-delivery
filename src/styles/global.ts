import { createGlobalStyle } from 'styled-components'

import { normalize } from 'polished'

export default createGlobalStyle`
  ${normalize()}

  body{
    font-family: 'Nunito', sans-serif;
    background-color: ${(props): string => props.theme.colors.background}
  }
  `
