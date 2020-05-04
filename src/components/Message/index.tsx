import React, { FC } from 'react'

import { Container, Image, Text } from './styles'

interface TProps {
  image: string
  text: string
}

const Message: FC<TProps> = ({ image, text }) => {
  return (
    <Container data-testid="zoe-message">
      <Image src={image} data-testid="zoe-message-image" />
      <Text data-testid="zoe-message-text">{text}</Text>
    </Container>
  )
}

export default Message
