import React, { useContext, FC } from 'react'
import { Link } from 'react-router-dom'

import { ZoeContext } from '~/context'
import { Types } from '~/context/reducers'

import Logo from '../Logo'
import Logotype from '../Logotype'

import { Container, Inner, LogoContainer, BagButton, BagCount } from './styles'

const Header: FC = () => {
  const { state, dispatch } = useContext(ZoeContext)

  const handleToggleBag = (): void => {
    dispatch({
      type: Types.OPEN_CART,
      payload: !state.bag.isOpen
    })
  }

  return (
    <Container>
      <Inner>
        <LogoContainer>
          <Link to="/">
            <Logo />
          </Link>
          <Logotype />
        </LogoContainer>
        <BagButton onClick={handleToggleBag}>
          <BagCount>{state.bag.amountItems}</BagCount>
        </BagButton>
      </Inner>
    </Container>
  )
}

export default Header
