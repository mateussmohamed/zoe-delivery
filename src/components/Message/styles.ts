import styled from 'styled-components'

export const Container = styled.div.attrs(() => ({
  'data-testid': 'zoe-message'
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`

export const Image = styled.img.attrs(() => ({
  'data-testid': 'zoe-message-image'
}))`
  height: 150px;
`

export const Text = styled.p.attrs(() => ({
  'data-testid': 'zoe-message-text'
}))`
  margin-top: 1.5rem;
  font-weight: 300;
  font-size: 16px;
`
