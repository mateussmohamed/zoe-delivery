import React, { FC, InputHTMLAttributes } from 'react'

import { Container, Input, Icon } from './styles'

type TProps = {} & InputHTMLAttributes<HTMLInputElement>

const AddressInput: FC<TProps> = ({ placeholder, onChange, value, disabled }) => {
  return (
    <Container>
      <Icon />
      <Input placeholder={placeholder} onChange={onChange} value={value} disabled={disabled} />
    </Container>
  )
}

export default AddressInput
