import styled, { keyframes } from 'styled-components'
import px2vw from 'utils/resize'
import { Colors } from 'styles/colors'
import { fadeIn } from 'react-animations'

export const Container = styled.div`
  background-color: ${Colors.blackFull};
  z-index: 100;
  border-bottom: 1px solid #252525;
  border-radius: 0px 0px 20px 20px;

  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${px2vw(10)} 20px;
`

export const ContainerCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
`

export const ImageLogo = styled.img`
  width: ${px2vw(150)};
  height: auto;
  margin-right: 15%;
`

export const TextTitle = styled.h4`
  font-family: 'Roboto';
  font-weight: 400;
  color: ${Colors.white};
  font-size: 2rem;

  margin-left: 10vw;
`

export const TextNameUser = styled.span`
  font-family: 'Roboto';

  font-size: 1.5rem;

  color: ${Colors.textMatte};
`

const fadeInAnimation = keyframes`${fadeIn}`

export const ContainerMenuAvatar = styled.div`
  width: 20vw;
  background: ${Colors.blackFull}95;
  border: 0.5px solid ${Colors.matte};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 0px 10px 10px;
  animation: 1s ${fadeInAnimation};
  overflow: hidden;
  position: absolute;
  top: 5vh;
  right: 5vw;
`

export const IconLogout = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
`
export const IconMenu = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  cursor: pointer;
`
