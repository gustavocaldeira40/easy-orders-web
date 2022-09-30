/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react'
import { InputProps } from 'types/input'

import { Colors } from 'styles/colors'
import { InputAdornment } from '@mui/material'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import CheckIcon from 'assets/icons/check.png'
import ErrorIcon from 'assets/icons/error.png'
import {
  Container,
  ContainerError,
  ContainerIcon,
  ContainerInput,
  ErrorMessage,
  Icon,
  InputPersonalized,
  TextIcon,
} from './style'

const InputComponent: React.FC<InputProps> = ({
  defaultValue,
  value,
  onChange,
  onKeyDown,
  passRef,
  placeholder,
  isPassword,
  errorMessage,
  disabled,
  helperText,
  style,
  isInputNumber,
  width,
  isCheck,
  check,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hidden, setHidden] = useState(true)

  return (
    <Container width={width}>
      <ContainerInput errorMessage={errorMessage} isFocused={isFocused}>
        <InputPersonalized
          variant="standard"
          onKeyDown={onKeyDown}
          ref={passRef}
          fullWidth
          type={
            isInputNumber
              ? 'number'
              : isPassword && hidden
              ? 'password'
              : 'text'
          }
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          error={errorMessage}
          style={{ padding: 14, ...style }}
          inputProps={{
            style: {
              color: Colors.white,
              fontSize: 16,
              fontFamily: 'Roboto',
              fontStyle: 'italic',
              // fontWeight: 400,
            },
          }}
          InputProps={{
            disableUnderline: true,
            readOnly: disabled,
            endAdornment: isPassword ? (
              <InputAdornment position="end">
                {hidden ? (
                  <AiOutlineEye
                    color={Colors.matte}
                    size={20}
                    onClick={() => setHidden(!hidden)}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    color={Colors.matte}
                    size={20}
                    onClick={() => setHidden(!hidden)}
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </InputAdornment>
            ) : isCheck ? (
              <InputAdornment position="end">
                {check ? (
                  <ContainerIcon>
                    <TextIcon isCheck={check}>Nickname Avaliable</TextIcon>
                    <Icon src={CheckIcon} alt="check icon" />
                  </ContainerIcon>
                ) : (
                  <ContainerIcon>
                    <TextIcon isCheck={check}>Nickname Not Available</TextIcon>
                    <Icon src={ErrorIcon} alt="error icon" />
                  </ContainerIcon>
                )}
              </InputAdornment>
            ) : null,
          }}
          InputLabelProps={{
            shrink: true,
            style: {
              color: errorMessage
                ? Colors.error
                : isFocused
                ? `${Colors.white}88`
                : Colors.matte,
            },
          }}
        />
      </ContainerInput>

      {errorMessage && (
        <ContainerError>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ContainerError>
      )}
    </Container>
  )
}

export default InputComponent
