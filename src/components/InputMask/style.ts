import InputMask from 'react-input-mask'
import styled from 'styled-components'
import { Colors } from 'styles/colors'
import { InputMaskProps } from 'types/input-mask'

export const ContainerInput = styled.div<any>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${Colors.bgInputActive};
  border: 1px solid
    ${(props) => (props.isFocused ? Colors.white : `${Colors.white}50`)};
  margin: ${(props) => (props.withMarginVertical ? '10px 0px' : '0px')};
  border-radius: 15px;
  margin-bottom: ${(props) => (props.withMB ? props.withMB : 0)}px;
  width: ${(props) => (props.width ? props.width : 'auto')};
`

export const InputStyled = styled(InputMask)`
  background: transparent;
  border: none;
  font-family: Roboto;
  font-weight: 400;
  border-radius: 15px;
  font-size: 16px;
  padding: 20px;
  color: ${Colors.white};
`

export const ContainerInformation = styled.div`
  background: ${Colors.blackFull}99;
  border: 1px solid ${Colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 0px 10px 10px;
  padding: 20px;
  width: 60%;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  top: 40px;
  left: 30px;
  z-index: 2;
`

export const TextInformation = styled.span`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: ${Colors.white};
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
`
