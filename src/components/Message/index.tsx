import React, { FC } from 'react'

import { Container, Image, Text } from './styles'

interface TProps {
  image: string
  text: string
  height?: number
}

const Message: FC<TProps> = ({ image, text, height }) => {
  return (
    <Container data-testid="zoe-message">
      <Image src={image} height={height} data-testid="zoe-message-image" />
      <Text data-testid="zoe-message-text">{text}</Text>
    </Container>
  )
}

export default Message
