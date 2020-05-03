import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../Logo'
import Logotype from '../Logotype'

import { Container, Inner } from './styles'

const Header: FC = () => {
  return (
    <Container>
      <Inner>
        <Link to="/">
          <Logo />
        </Link>
        <Logotype />
      </Inner>
    </Container>
  )
}

export default Header
