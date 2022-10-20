import React, { useState } from 'react'

import { InputMaskProps } from 'types/input-mask'
import {
  ContainerInformation,
  ContainerInput,
  Icon,
  InputStyled,
  TextInformation,
} from './style'

const InputMaskComponent: React.FC<InputMaskProps> = ({
  defaultValue,
  value,
  onChange,
  passRef,
  errorMessage,
  onKeyDown,
  placeholder,
  width,
  style,
  withMB,
  disabled,
  withMarginVertical,
  mask,
  messageHelperText,
  withoutBackground,
}) => {
  const documentMask = '999.999.999-99'

  const [showInformation, setShowInformation] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  return (
    <ContainerInput
      withoutBackground={withoutBackground}
      width={width}
      withMarginVertical={withMarginVertical}
    >
      <InputStyled
        disabled={disabled}
        width={width}
        ref={passRef}
        mask={mask || documentMask}
        onKeyDown={onKeyDown}
        value={value}
        style={style}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />

      {showInformation && (
        <ContainerInformation>
          <TextInformation>{messageHelperText}</TextInformation>
        </ContainerInformation>
      )}
    </ContainerInput>
  )
}

export default InputMaskComponent
