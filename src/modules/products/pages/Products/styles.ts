import styled from 'styled-components'

export const Container = styled.div.attrs(() => ({
  'data-testid': 'zoe-products-container'
}))`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
`
