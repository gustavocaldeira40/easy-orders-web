export type InputProps = {
  defaultValue: string | number
  value?: string | number
  onChange: (value: any) => void
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement> | undefined
  passRef?: any
  placeholder?: string
  isPassword?: boolean
  errorMessage: any
  helperText?: string
  disabled?: boolean
  style?: any
  width?: string | number
  isInputNumber?: boolean
  isCheck?:boolean
  check?:boolean
}
