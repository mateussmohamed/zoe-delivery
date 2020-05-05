import React, { useContext, FC } from 'react'
import { Link } from 'react-router-dom'

import { ZoeContext } from '~/context'
import { Types } from '~/context/reducers'

import Logo from '../Logo'
import Logotype from '../Logotype'

import { Container, Inner, InnerContainer, BagButton, BagCount, DeliverOn, DeliverOnText } from './styles'

const Header: FC = () => {
  const {
    state: { bag, customer },
    dispatch
  } = useContext(ZoeContext)

  const handleToggleBag = (): void => {
    dispatch({
      type: Types.TOGGLE_BAG,
      payload: !bag.isOpen
    })
  }

  return (
    <Container>
      <Inner>
        <InnerContainer>
          <Link to="/">
            <Logo />
          </Link>
          <Logotype />
          {customer.address.description && (
            <DeliverOn>
              <DeliverOnText>
                Entregar em
                <br />
                {customer.address.description}
              </DeliverOnText>
            </DeliverOn>
          )}
        </InnerContainer>
        <BagButton onClick={handleToggleBag}>
          <BagCount>{bag.amountItems}</BagCount>
        </BagButton>
      </Inner>
    </Container>
  )
}

export default Header
