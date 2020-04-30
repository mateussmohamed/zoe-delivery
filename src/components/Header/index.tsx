import React, { FC } from 'react'

import { Container, Inner, LogoBox, LogoImage, LogoTitle, LogoSubtitle } from './styles'

import zoeLogo from '../../assets/zoe-logo.svg'

const Header: FC = () => {
  return (
    <Container>
      <Inner>
        <LogoImage src={zoeLogo} />
        <LogoBox>
          <LogoTitle>Zoe</LogoTitle>
          <LogoSubtitle>Delivery</LogoSubtitle>
        </LogoBox>
      </Inner>
    </Container>
  )
}

export default Header
