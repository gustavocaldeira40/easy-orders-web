import { Colors } from 'styles/colors'
import px2vw from 'utils/resize'
import styled from 'styled-components'

export const Container = styled.div``

export const ContainerHeader = styled.div`
  margin-left: 50px;
  margin-top: 30px;
`

export const ContainerLetter = styled.div`
  background: #8a0ea7;
  height: 18vh;
  width: 18vh;
  padding: 5px;
  margin-bottom: 20px;
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

export const ContainerChangeInformationsUser = styled.div`
  margin: 40px 20px 40px 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const TextNameUser = styled.span`
  font-family: 'Roboto';
  font-weight: 200;
  font-size: 1.2rem;

  color: #8f8f8f;
`

export const TextNick = styled.span`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 1.5rem;

  color: #ffffff;
`

export const ContainerInputs = styled.div`
  margin: 20px 20px 20px 80px;
`

export const TextTitle = styled.h1`
  font-family: 'Roboto Condensed';
  font-weight: 600;
  font-size: ${px2vw(30)}px;
  text-transform: uppercase;
  color: ${Colors.white};
`

export const Line = styled.div`
  width: 100%;
  border-radius: 40px;
  border: 1px solid ${Colors.line};
  margin: 20px 0;
`

export const ContainerButtonActions = styled.div`
  display: flex;
`

export const ContainerUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
