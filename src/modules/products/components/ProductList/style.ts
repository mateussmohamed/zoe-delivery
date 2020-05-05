import styled from 'styled-components'

export const Cards = styled.section`
  display: flex;
  max-width: 1024px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  background: ${(props): string => props.theme.colors.white};
  border-radius: 5px;
  margin-bottom: 2rem;
  flex: 0 1 calc(25% - 1rem);
  box-shadow: 2px 2px 3px 3px rgba(66, 64, 83, 0.1);
`

export const ProductImage = styled.img`
  height: 150px;
  width: 150px;
  margin: 1rem;
  align-self: center;
  object-fit: cover;
`

export const ProductTitle = styled.h3`
  font-size: 14px;
  color: ${(props): string => props.theme.colors.secondary};
`

export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 800;
  margin-top: 0.5rem;
`

export const AddToBagButton = styled.button`
  width: 100%;
  height: auto;
  padding: 0.5rem;
  background-color: ${(props): string => props.theme.colors.secondary};
  color: ${(props): string => props.theme.colors.background};
  border-radius: 5px;
  outline: 0;
  border: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  margin-top: 0.5rem;

  &:hover {
    background-color: ${(props): string => props.theme.colors.secondaryDark};
    box-shadow: 1px 1px 9px 5px rgba(66, 64, 83, 0.13);
  }

  &:before {
    content: '+';
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.2rem;
    border-radius: 50%;
    border: 1px solid ${(props): string => props.theme.colors.background};
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`
