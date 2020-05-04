import styled from 'styled-components'
import { size } from 'polished'

import bagIcon from '~/assets/bag-icon.svg'

export const Container = styled.header.attrs(() => ({
  'data-testid': 'zoe-header'
}))`
  ${size(80, '100%')};
  background: ${(props): string => props.theme.colors.header};
  display: flex;
  justify-content: center;
`

export const LogoContainer = styled.a`
  display: flex;
  flex: 1;
`

export const Inner = styled.div`
  max-width: 1024px;
  display: flex;
  flex: 1;
  align-items: center;
`

export const BagButton = styled.button`
  width: 32px;
  height: 32px;
  position: relative;
  border: 0;
  outline: 0;
  cursor: pointer;
  background: transparent url(${bagIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`

export const BagCount = styled.span`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 22px;
  height: 22px;
  text-align: center;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 800;
  color: #f0efff;
  background-color: #945b7b;
  display: flex;
  justify-content: center;
  align-items: center;
`
