import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`

export const Text = styled.p`
  font-size: 16px;
  text-align: center;
`

export const LinkProduct = styled(Link)`
  font-weight: 800;
  color: ${(props): string => props.theme.colors.primary};
  text-decoration: none;
`
