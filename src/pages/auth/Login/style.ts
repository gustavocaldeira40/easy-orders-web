import styled from 'styled-components'
import { Colors } from 'styles/colors'

import BGScreen from 'assets/images/bg-lines.png'

const { innerHeight } = window

export const Container = styled.div`
  display: flex;
  height: ${innerHeight}px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* Background */
  background-image: url(${BGScreen});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const ContainerInputs = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35vw;
  margin-top: 10px;
`

export const TextIcon = styled.span`
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 10px;
  color: ${Colors.textMatte};

  &:hover {
    color: ${Colors.white}55;
    transition: all 1s;
  }
  &:not(:hover) {
    color: ${Colors.textMatte};
    transition: all 1s;
  }
`

export const ContainerIconChange = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #d9d9d9;
  padding: 5px 10px;
  border-radius: 20px;

  &:hover {
    background: ${Colors.bg};
    transition: all 1s;
  }
  &:not(:hover) {
    background: #d9d9d9;
    transition: all 1s;
  }
`

export const IconChange = styled.img`
  width: 25px;
  height: 25px;
`

export const TextScreen = styled.span`
  font-family: 'Roboto';
  font-style: italic;
  font-size: 15px;

  color: ${Colors.white};
`

export const ContainerFooter = styled.div`
  display: flex;
  margin-top: 20px;
`

export const ContainerRegister = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
`

export const TextDontHaveAccount = styled.span`
  font-family: 'Roboto';
  font-style: italic;
  font-size: 1rem;
  color: ${Colors.textMatte};
`

export const TextRegister = styled.span`
  font-family: 'Roboto Condensed';
  font-weight: 500px;
  font-size: 1.2rem;
  margin-left: 10px;
  text-transform: uppercase;
  color: ${Colors.white};
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
