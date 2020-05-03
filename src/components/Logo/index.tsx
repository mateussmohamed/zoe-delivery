import React, { FC } from 'react'

import { LogoImage } from './styles'

import zoeLogo from '../../assets/zoe-logo.svg'

const Header: FC = () => {
  return <LogoImage src={zoeLogo} />
}

export default Header
