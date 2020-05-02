import React, { FC } from 'react'

import { Container, Image, Message } from './styles'

import unavailableMessage from '../../../../assets/unavailable-service.svg'

const UnavailableMessage: FC = () => {
  return (
    <Container>
      <Image src={unavailableMessage} />
      <Message>
        Poxa, ainda não chegamos na sua região{' '}
        <span role="img" aria-label="sparkling-heart">
          😔
        </span>
      </Message>
    </Container>
  )
}

export default UnavailableMessage
