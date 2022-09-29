import { TokenData } from 'interfaces/token'
import { UserData } from 'interfaces/user'
import { NavigateFunction } from 'react-router-dom'

export type DataContextType = {
  user: UserData
  setUser: React.Dispatch<React.SetStateAction<UserData>>

  token: string
  setToken: React.Dispatch<React.SetStateAction<string>>
  isAuthenticate: boolean
  setIsAuthenticate: React.Dispatch<React.SetStateAction<boolean>>
  getUser: (id: number) => void
  verifyNickname: (value: string) => Promise<boolean | undefined>
  changeAvatar: (files: any) => Promise<any>
  logOut: () => Promise<boolean>
  getToken: () => Promise<TokenData | null>
  resolveError: (error: any, navigateTo: NavigateFunction) => Promise<boolean>
}
