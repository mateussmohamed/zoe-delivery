import React, { FC } from 'react'

import { Container, Image, Text } from './styles'

type TProps = {
  image: string
  text: string
}

const Message: FC<TProps> = ({ image, text }) => {
  return (
    <Container>
      <Image src={image} />
      <Text>{text}</Text>
    </Container>
  )
}

export default Message
