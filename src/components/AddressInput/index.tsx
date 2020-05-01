import React, { FC } from 'react'

import { Container, Input, Icon } from './styles'

type TProps = {
  placeholder: string
}

const AddressInput: FC<TProps> = ({ placeholder }) => {
  return (
    <Container>
      <Icon />
      <Input placeholder={placeholder} />
    </Container>
  )
}

export default AddressInput
