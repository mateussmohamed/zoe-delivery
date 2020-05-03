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
  border: 1px solid #955c7b;
  color: ${(props): string => (props.isActive ? '#f0f0ff' : '#955c7b')};
  background-color: ${(props): string => (props.isActive ? '#955c7b' : 'transparent')};

  :hover {
    color: #fff;
    background-color: #955c7b;
  }
`
