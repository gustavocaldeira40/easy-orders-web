import styled from 'styled-components'
import { Colors } from 'styles/colors'

export const ContainerItemAvatar = styled.div`
  border-bottom: 1px solid ${Colors.matte};

  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    box-shadow: 0px 2px 2px rgba(255, 255, 255, 0.25);
    background-color: ${Colors.blackFull};
    transition: 1s all;
  }
`

export const TextMenuAvatar = styled.span`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  color: ${Colors.white};
`

export const IconAvatar = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`
