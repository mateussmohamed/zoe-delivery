import styled from 'styled-components'

export const Container = styled.div.attrs(() => ({
  'data-testid': 'zoe-address-container'
}))`
  position: relative;
`

export const List = styled.ul.attrs(() => ({
  'data-testid': 'zoe-address-suggestions'
}))`
  list-style: none;
  background: #fff;
  position: absolute;
  top: 60px;
  width: 100%;
  z-index: 1;
  box-shadow: 1px 1px 5px 3px rgba(66, 64, 83, 0.1);
`

export const Item = styled.li.attrs(() => ({
  'data-testid': 'zoe-address-suggestions-item'
}))`
  cursor: pointer;
  padding: 1rem;

  :hover {
    background-color: rgba(108, 99, 255, 0.1);
  }

  :last-child {
    margin-bottom: 0;
  }
`

export const MainText = styled.strong.attrs(() => ({
  'data-testid': 'zoe-address-suggestions-main'
}))`
  margin-right: 3px;
`

export const SecondaryText = styled.small.attrs(() => ({
  'data-testid': 'zoe-address-suggestions-secondary'
}))`
  font-size: 12px;
`
