import { Colors } from 'styles/colors'
import styled from 'styled-components'
import { ListItemIcon } from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'

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
  position: fixed;
  top: 20px;
  left: 20px;
`

export const ContainerItem = styled.div<any>`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => (props.isFocused ? '0 0 20px 0' : 0)};
  background-color: ${(props) =>
    props.isFocused ? Colors.hover : 'transparent'};
  transform: all 1s;
`

export const ListIcon = styled(ListItemIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ListText = styled(ListItemText)<any>`
  color: ${(props) => (props.isFocused ? Colors.blackFull : Colors.white)};
  font-weight: ${(props) => (props.isFocused ? 700 : 500)};
  text-transform: uppercase;
  font-family: 'Roboto Condensed';
  font-size: 1rem;
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

  &:hover {
    color: ${Colors.matte};
    transform: all 1s;
  }
`

export const IconSubMenu = styled.img`
  width: 1.5vw;
`
