import styled from 'styled-components'

import pinIcon from '../../../../assets/pin-icon.svg'

export const Container = styled.div.attrs(() => ({
  'data-testid': 'zoe-address-container'
}))`
  position: relative;
`

export const List = styled.ul.attrs(() => ({
  'data-testid': 'zoe-address-suggestions'
}))`
  list-style: none;
  background: ${(props): string => props.theme.colors.white};
  position: absolute;
  top: 60px;
  width: 100%;
  z-index: 1;
  box-shadow: 1px 1px 5px 3px rgba(66, 64, 83, 0.1);
  border-radius: 0 0 5px 5px;
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

export const InputContainer = styled.div`
  position: relative;
  z-index: 2;
`

export const Input = styled.input`
  width: 40rem;
  height: 3.75rem;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 3px rgba(66, 64, 83, 0.1);
  color: ${(props): string => props.theme.colors.primary};
  padding: 0.625rem 1.25rem 0.625rem 3.75rem;

  &:focus {
    box-shadow: 1px 1px 9px 5px rgba(66, 64, 83, 0.13);
  }

  ::placeholder {
    color: ${(props): string => props.theme.colors.primary};
  }
`

export const InputIcon = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  background-image: url(${pinIcon});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  left: 0.625rem;
  top: 0.625rem;
`
