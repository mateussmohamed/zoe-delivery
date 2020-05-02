import styled from 'styled-components'

export const Container = styled.div.attrs(() => ({
  'data-testid': 'zoe-layout'
}))`
  display: flex;
  flex-direction: column;
`

export const Middle = styled.section.attrs(() => ({
  'data-testid': 'zoe-layout-middle'
}))`
  min-height: calc(100vh - 160px);
`
