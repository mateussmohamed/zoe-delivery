import React, { FC } from 'react'

import { Container, Description } from './styles'

import Logotype from '../Logotype'

const Footer: FC = () => {
  return (
    <Container>
      <Logotype />
      <Description>
        Made with love{' '}
        <span role="img" aria-label="sparkling-heart">
          💖
        </span>
      </Description>
    </Container>
  )
}

export default Footer
