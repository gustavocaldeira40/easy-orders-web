import { Colors } from 'styles/colors'
import styled from 'styled-components'

export const ContainerTops = styled.div``

export const ContainerMinFilters = styled.div`
  background: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  cursor: pointer;
`

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const TextFilters = styled.span`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  color: ${Colors.white};
`

export const ContainerInput = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: row;
`

export const ContainerTextAndInput = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const TextInAndAt = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${Colors.white};
  padding: 0 10px;
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
