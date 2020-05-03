import styled from 'styled-components'
import { size } from 'polished'

export const Container = styled.header.attrs(() => ({
  'data-testid': 'zoe-header'
}))`
  ${size(80, '100%')};
  background: ${(props): string => props.theme.colors.header};
  display: flex;
  justify-content: center;
`

export const Inner = styled.div.attrs(() => ({}))`
  max-width: 1440px;
  display: flex;
  flex: 1;
  align-items: center;
`
