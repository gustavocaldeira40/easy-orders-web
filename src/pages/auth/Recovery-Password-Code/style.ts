import { Colors } from 'styles/colors'
import styled from 'styled-components'

import BGScreen from 'assets/images/bg-lines.png'

const { innerHeight } = window

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* Background */
  background-image: url(${BGScreen});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${innerHeight}px;
`

export const ContainerTop = styled.div``

export const ContainerTimer = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
`

export const TextTimerDescription = styled.span<any>`
  font-family: 'Roboto';
  font-size: 1rem;
  margin-left: 5px;

  color: ${(props) => (props.green ? Colors.success : Colors.textMatte)};
`

export const TextTimer = styled.span`
  font-family: 'Roboto Condensed';
  font-size: 17px;
  margin-left: 10px;
  color: ${Colors.error};
`

export const ContainerSendAgain = styled.div`
  background: ${Colors.bg};
  border-radius: 30px;
  padding: 10px;
  width: 15vw;
  display: flex;
  align-items: center;
  margin: 10px 30px;
  cursor: pointer;
`

export const IconSendAgain = styled.img`
  width: 1.5vw;
  height: auto;
  margin: 0 10px;
`

export const ContainerInput = styled.div`
  display: flex;
  padding: 20px 20px 0 20px;
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
