import { Colors } from 'styles/colors'
import styled, { keyframes } from 'styled-components'

import BGScreen from 'assets/images/bg-lines.png'

import { fadeIn } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`

export const Container = styled.div`
  background-image: url(${BGScreen});
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  min-height: 100vh;
`

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Separator = styled.div`
  width: 20px;
`

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: row;
  flex: 1;
`

export const ContainerLetter = styled.div`
  background: #8a0ea7;
  width: 100px;
  height: 100px;
  padding: 5px;
  /* margin-bottom: 20px; */
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 720px) {
    height: 15vh;
    width: 15vh;
  }
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

export const TextLetter = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;

  color: #ffffff;
`

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const ContainerAvatarEdit = styled.div`
  display: flex;
  align-items: center;
  /* background-color: red; */
  padding: 10px;
  margin-bottom: 20px;
`

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 20px;
`

export const ContainerLink = styled.div`
  border: 1px solid #ffffff55;
  border-radius: 25px;
  padding: 10px 20px;
`

export const TextLinkAvatar = styled.span<any>`
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  color: ${(props) => (props.isRemove ? Colors.error : Colors.white)};
`

export const ContainerAlignEnd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
