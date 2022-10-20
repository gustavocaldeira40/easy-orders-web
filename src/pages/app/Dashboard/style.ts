import styled from 'styled-components'
import { Colors } from 'styles/colors'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`
export const ContainerFilter = styled.div`
  background-color: ${Colors.bgContainer};
  width: 25vw;
  padding: 40px;
  border-radius: 20px;
  margin: 20px;
  margin-left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`

export const IconFilter = styled.img`
  width: 5vw;
`
