import { Colors } from 'styles/colors'
import styled from 'styled-components'

import BGScreen from 'assets/images/bg-lines.png'
import { Link } from 'react-router-dom'

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

export const ContainerInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
`

export const Separator = styled.div`
  width: 2vw;
`
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`
