export interface UserData {
  id: number
  avatar?: AvatarData
  name: string
  nickname: string
  email: string
  document?: string
  phoneNumber?: string
  address?: string
  number?: null
  complements?: null
  city?: string
  state?: string
  country?: string

  birthday?: null
}

type AvatarData = {
  fileName: string
  typeFile: string
}
