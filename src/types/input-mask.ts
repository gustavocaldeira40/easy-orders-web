export type InputMaskProps = {
  defaultValue?: string | number
  value?: string
  onChange?: (value: any) => void
  passRef?: React.Ref<any>
  placeholder?: string
  isPassword?: boolean
  errorMessage: any
  width?: string | number
  style?: any
  withMB?: string | number
  mask?: string
  disabled?: boolean
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined
  withMarginVertical?: boolean
  messageHelperText?: string
  withoutBackground?: boolean
}
