import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  padding: 1rem 0;
`

interface ButtonProps {
  readonly isActive: boolean
}

export const Button = styled.button<ButtonProps>`
  padding: 0.7rem 1.2rem;
  margin: 0 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 5px;
  outline: 0;
  border: 0;
  cursor: pointer;
  transition: 0.2s;
  border: 1px solid ${(props): string => props.theme.colors.secondary};
  color: ${(props): string => (props.isActive ? props.theme.colors.background : props.theme.colors.secondary)};
  background-color: ${(props): string => (props.isActive ? props.theme.colors.secondary : 'transparent')};

  :hover {
    color: ${(props): string => props.theme.colors.background};
    background-color: ${(props): string => props.theme.colors.secondary};
  }
`
