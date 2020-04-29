// import 'styled-components'

// declare module 'styled-components' {
//   export interface DefaultThme {
//     borderRadius: string

//     colors: {
//       main: string
//       darkGrey: string
//     }
//   }
// }

import {} from 'styled-components'
import theme from './themes/default'

declare module 'styled-components' {
  type Theme = typeof theme
  export interface DefaultTheme extends Theme {
    title: string
  }
}
