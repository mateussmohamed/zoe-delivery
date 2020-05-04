import styled from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 350px;
  height: 100vh;
  background: ${(props): string => props.theme.colors.white};
  z-index: 11;
`

export const Header = styled.header`
  background: ${(props): string => props.theme.colors.primary};
  padding: 0 1rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderTitle = styled.h3`
  color: ${(props): string => props.theme.colors.background};
  flex: 1;
`
export const CloseBag = styled.span`
  color: ${(props): string => props.theme.colors.background};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid ${(props): string => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${(props): string => props.theme.colors.secondary};
    background-color: ${(props): string => props.theme.colors.background};
  }
`

export const Products = styled.div`
  overflow-y: auto;
  height: calc(100vh - 80px);
  padding-bottom: 12rem;
`

export const Product = styled.div`
  display: flex;
  margin: 1rem;
  padding: 0.5rem;
  box-shadow: 0 0 3px 3px rgba(66, 64, 83, 0.1);
`
export const ProductImage = styled.img`
  width: 100px;
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 0.5rem;
`
export const ProductTitle = styled.h4`
  font-size: 14px;
  color: ${(props): string => props.theme.colors.secondary};
`
export const ProductActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`

const ActionButton = styled.button`
  background-color: ${(props): string => props.theme.colors.secondary};
  color: ${(props): string => props.theme.colors.background};
  border-radius: 5px;
  outline: 0;
  border: 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;

  &:hover {
    background-color: ${(props): string => props.theme.colors.secondaryDark};
    box-shadow: 1px 1px 9px 5px rgba(66, 64, 83, 0.13);
  }
`

export const ProductMinus = styled(ActionButton)`
  width: 32px;
  height: 32px;
  &:before {
    content: '-';
  }
`

export const ProductPlus = styled(ActionButton)`
  width: 32px;
  height: 32px;
  &:before {
    content: '+ ';
  }
`
export const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: 800;
`

export const Footer = styled.footer`
  background: ${(props): string => props.theme.colors.white};
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 -4px 10px 1px rgba(66, 64, 83, 0.3);
`

export const FooterItem = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  align-items: center;
`

export const FooterItemLeft = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${(props): string => props.theme.colors.grey};
`

export const FooterItemRight = styled.span`
  font-size: 16px;
  font-weight: 800;
  color: ${(props): string => props.theme.colors.dark};
`

export const CheckoutButton = styled(ActionButton)`
  width: 100%;
  padding: 1rem;
  margin-top: 1.5rem;
  font-size: 16px;
`
