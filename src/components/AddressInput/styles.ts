import styled from 'styled-components'

import pinIcon from '../../assets/pin-icon.svg'

export const Container = styled.div.attrs(() => ({
  'data-testid': 'zoe-input-container'
}))`
  position: relative;
  z-index: 2;
`

export const Input = styled.input.attrs(() => ({
  'data-testid': 'zoe-input',
  type: 'text'
}))`
  width: 40rem;
  height: 3.75rem;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 3px rgba(66, 64, 83, 0.1);
  color: ${(props): string => props.theme.colors.header};
  padding: 0.625rem 1.25rem 0.625rem 3.75rem;

  &:focus {
    box-shadow: 1px 1px 9px 5px rgba(66, 64, 83, 0.13);
  }

  ::placeholder {
    color: ${(props): string => props.theme.colors.header};
  }
`

export const Icon = styled.span.attrs(() => ({
  'data-testid': 'zoe-input-icon'
}))`
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
