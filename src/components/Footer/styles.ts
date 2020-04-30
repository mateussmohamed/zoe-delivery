import styled from 'styled-components'
import { size } from 'polished'

export const Container = styled.footer.attrs(() => ({
  'data-testid': 'zoe-footer'
}))`
  ${size(80, '100%')};
  background: ${(props): string => props.theme.colors.footer};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Description = styled.h4.attrs(() => ({
  'data-testid': 'zoe-footer-description'
}))`
  font-weight: 400;
  color: #fff;
`
