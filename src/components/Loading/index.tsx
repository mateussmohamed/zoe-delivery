import React, { FC } from 'react'
import { Container, Spinner } from './styles'

const Loading: FC = () => (
  <Container data-testid="zoe-loading">
    <Spinner data-testid="zoe-loading-spinner" />
  </Container>
)
export default Loading
