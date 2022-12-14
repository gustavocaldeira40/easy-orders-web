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

export const ContainerInput = styled.div`
  display: flex;
  padding: 20px;
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
