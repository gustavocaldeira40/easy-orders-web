import { Colors } from 'styles/colors'
import styled from 'styled-components'

import { TextField } from '@material-ui/core'

export const Container = styled.div<any>`
  width: ${(props) => (props.width ? props.width : '50%')};
`

export const ContainerInput = styled.div<any>`
  display: flex;
  margin: 10px 0;
  width: ${(props) => (props.width ? props.width : 'auto')};
  border: 1px solid
    ${(props) =>
      props.success
        ? Colors.success
        : props.errorMessage
        ? Colors.error
        : props.isFocused
        ? Colors.white
        : Colors.matte};
  border-radius: 15px;
`

export const InputPersonalized = styled(TextField)`
  background: ${Colors.bgInputActive};
  border-radius: 15px;

  input {
    font-size: 16px;
    font-weight: 200;
    font-family: Roboto;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextIcon = styled.span<any>`
  font-family: Roboto;
  font-style: italic;
  font-size: 0.8rem;
  margin-right: 5px;
  color: ${(props) => (props.isCheck ? Colors.success : Colors.error)};
`

export const Icon = styled.img`
  width: 1.4vw;
  height: auto;
`

export const ContainerError = styled.div`
  justify-content: flex-start;
  margin: 10px;
  width: 80%;
  display: flex;
`

export const ErrorMessage = styled.span`
  color: ${Colors.error};
  text-align: left;
  font-size: 1em;
`
