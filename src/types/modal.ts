export type ModalProps = {
  title: string
  description?: string
  textButtonOk?: string
  textButtonBack?: string
  visible: boolean
  handleOk?: () => void
  handleCancel: () => void
  isErrorAuth?: boolean
}
