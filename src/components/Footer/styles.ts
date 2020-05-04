import styled from 'styled-components'

export const Container = styled.footer.attrs(() => ({
  'data-testid': 'zoe-footer'
}))`
  width: 100%;
  height: 80px;
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
