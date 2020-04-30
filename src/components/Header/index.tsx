import React, { FC } from 'react'

import Logo from '../Logo'
import Logotype from '../Logotype'

import { Container, Inner } from './styles'

const Header: FC = () => {
  return (
    <Container>
      <Inner>
        <Logo />
        <Logotype />
      </Inner>
    </Container>
  )
}

export default Header
