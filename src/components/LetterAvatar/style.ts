import styled from 'styled-components'
import { Colors } from 'styles/colors'

export const ContainerRounded = styled.div<any>`
  background: #8a0ea7;
  height: 7vh;
  width: 7vh;
  padding: 2px;
  margin-left: 20px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ContainerDark = styled.div`
  background: #1c0321;
  border-radius: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextLetter = styled.h1<any>`
  color: #8a0ea7;
  font-size: ${(props) => (props.isSmall ? '14px' : '22px')};
`
