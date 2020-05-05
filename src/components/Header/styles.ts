import styled from 'styled-components'

import bagIcon from '../../assets/bag-icon.svg'
export const Container = styled.header.attrs(() => ({
  'data-testid': 'zoe-header'
}))`
  width: 100%;
  height: 80px;
  background: ${(props): string => props.theme.colors.primary};
  display: flex;
  justify-content: center;
`

export const InnerContainer = styled.div`
  display: flex;
  flex: 1;
`

export const Inner = styled.div`
  max-width: 1024px;
  display: flex;
  flex: 1;
  align-items: center;
`

export const BagButton = styled.button.attrs(() => ({
  'data-testid': 'zoe-bag-button'
}))`
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

export const BagCount = styled.span.attrs(() => ({
  'data-testid': 'zoe-bag-count'
}))`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 22px;
  height: 22px;
  text-align: center;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 800;
  color: ${(props): string => props.theme.colors.background};
  background-color: ${(props): string => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DeliverOn = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`

export const DeliverOnText = styled.p`
  color: ${(props): string => props.theme.colors.background};
  font-size: 12px;
  font-weight: 800;
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
