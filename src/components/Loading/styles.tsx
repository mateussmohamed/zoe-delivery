import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
`

const load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  position: relative;
  border-top: 0.225rem solid rgba(149, 92, 123, 0.2);
  border-right: 0.225rem solid rgba(149, 92, 123, 0.2);
  border-bottom: 0.225rem solid rgba(149, 92, 123, 0.2);
  border-left: 0.225rem solid #955c7b;
  transform: translateZ(0);
  animation: ${load} 1s infinite linear;

  border-radius: 50%;
  width: 3rem;
  height: 3rem;

  &:after {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
`
