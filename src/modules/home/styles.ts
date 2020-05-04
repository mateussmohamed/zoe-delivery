import styled from 'styled-components'

export const Container = styled.div.attrs(() => ({
  'data-testid': 'zoe-home-container'
}))`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
`

export const Button = styled.button.attrs(() => ({
  'data-testid': 'zoe-button-search-products'
}))`
  background-color: #955c7b;
  color: #fff;
  width: 20rem;
  padding: 1rem;
  margin: 2rem 0;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  outline: 0;
  border: 0;
  cursor: pointer;
  box-shadow: 1px 1px 5px 3px rgba(66, 64, 83, 0.1);

  &:hover {
    background-color: #6b3b55;
    box-shadow: 1px 1px 9px 5px rgba(66, 64, 83, 0.13);
  }
`
