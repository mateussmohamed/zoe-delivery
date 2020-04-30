import styled from 'styled-components'

export const Container = styled.div.attrs((attrs) => ({
  'data-testid': 'header'
}))`
  height: 65px;
  background: ${(props): string => props.theme.colors.header};
  padding: 0 30px;
`
