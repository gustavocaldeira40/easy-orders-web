import styled from 'styled-components'
import { Colors } from 'styles/colors'

export const ContainerRounded = styled.div<any>`
  width: ${(props) => (props.isSmall ? '30px' : props.isBig ? '100%' : '50px')};
  height: ${(props) =>
    props.isSmall ? '30px' : props.isBig ? '100%' : '50px'};
  border-radius: ${(props) => (props.isBig ? '50px' : '25px')};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.blackFull};
  border: 2px solid #8a0ea7;
  margin-right: ${(props) => (props.withoutMR ? 0 : '20px')};
  margin-top: ${(props) => (props.withMT ? '20px' : 0)};
  padding: ${(props) => (props.withoutPadding ? 0 : '15px')};
  cursor: pointer;
`

export const TextLetter = styled.h1<any>`
  color: #8a0ea7;
  font-size: ${(props) => (props.isSmall ? '14px' : '22px')};
`
