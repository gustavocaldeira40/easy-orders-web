import px2vw from 'utils/resize'
import { Colors } from 'styles/colors'
import styled from 'styled-components'

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
`

export const TextTitle = styled.h4`
  font-family: 'Roboto';
  font-weight: 400;
  color: ${Colors.white};
  font-size: 2rem;
`

export const TextNameUser = styled.span`
  font-family: 'Roboto';

  font-size: 1.5rem;

  color: ${Colors.textMatte};
`
