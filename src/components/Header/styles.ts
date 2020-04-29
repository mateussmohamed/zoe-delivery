import styled from 'styled-components'

export const Container = styled.div`
  height: 65px;
  background: ${(props): string => props.theme.colors.header};
  padding: 0 30px;
`
