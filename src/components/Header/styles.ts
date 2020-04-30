import styled from 'styled-components'
import { size, padding, margin } from 'polished'

export const Container = styled.div.attrs(() => ({
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

export const LogoBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  ${padding(0, 10)};
`

export const LogoImage = styled.img.attrs(() => ({
  'data-testid': 'zoe-logo'
}))`
  height: 60px;
`

export const LogoTitle = styled.h1.attrs(() => ({
  'data-testid': 'zoe-title'
}))`
  color: #fff;
  ${margin(0)};
`

export const LogoSubtitle = styled.h5.attrs(() => ({
  'data-testid': 'zoe-subtitle'
}))`
  color: #fff;
  ${margin(0)};
`
