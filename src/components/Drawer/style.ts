import { Colors } from 'styles/colors'
import styled from 'styled-components'

export const ContainerIconMenu = styled.div`
  margin: 0 10px;
`
export const IconMenu = styled.img`
  width: 20px;
  height: auto;
`

export const IconMenuOpen = styled.img`
  width: 15px;
  cursor: pointer;
  height: auto;
`

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`

export const LineDown = styled.div`
  width: 100%;
  border-bottom: 1px solid ${Colors.textMatte};
`

export const TextSubMenu = styled.div`
  font-family: 'Roboto';
  flex: 1;
  font-size: 1.2rem;
  margin-left: 4.5vw;
  color: ${Colors.textMatte};
`

export const IconSubMenu = styled.img`
  width: 1.5vw;
`
