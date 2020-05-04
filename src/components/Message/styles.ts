import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`

interface ImageProps {
  readonly height: number
}

export const Image = styled.img`
  height: ${(props): string => (props.height ? `${props.height}px` : '150px')};
`

export const Text = styled.p`
  margin-top: 1.5rem;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
`
