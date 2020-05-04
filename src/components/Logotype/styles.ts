import styled from 'styled-components'

export const Box = styled.div.attrs(() => ({
  'data-testid': 'zoe-logotype'
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`
export const Title = styled.h1.attrs(() => ({
  'data-testid': 'zoe-logo-title'
}))`
  color: #fff;
  font-weight: 600;
  margin: 0;
`

export const Subtitle = styled.h5.attrs(() => ({
  'data-testid': 'zoe-logo-subtitle'
}))`
  color: #fff;
  font-weight: 400;
  margin: 0;
`
