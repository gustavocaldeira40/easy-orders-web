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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: space-between;   */
  /* flex: 1; */
`

export const Separator = styled.div`
  width: 20px;
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContainerAlignEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`
