import React, { createContext, useState } from 'react'
import { UserData } from 'interfaces/user'
import { EndPoints } from 'services/endpoints'
import { ChildrenProps } from 'types/children'
import Cookies from 'js-cookie'
import { NavigateFunction } from 'react-router-dom'
import { TokenData } from 'interfaces/token'
import { DataContextType } from 'types/app-context'

export const DataContext = createContext({} as DataContextType)

const AppContext: React.FC<ChildrenProps> = ({ children }) => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */

  /*
   *   STATES
   */

  const [user, setUser] = useState<UserData>({} as UserData)
  const [token, setToken] = useState<string>(null as any)

  const [isAuthenticate, setIsAuthenticate] = useState(false)
  const [showModalError, setShowModalError] = useState(false)

  /*
   *   HOOKS
   */

  /*
   *   LAYOUT
   */

  /*
   *   FORMIK
   */

  /*
   *   FUNCTIONS
   */
  const getUser = async (id?: number) => {
    const userId = await Cookies.get('userId')

    if (userId || id) {
      const data = await EndPoints.getUser(id || Number(userId))
      if (data) {
        setUser(data?.data)
        return data?.data
      }
    }
    return null
  }

  const verifyNickname = async (value: string) => {
    try {
      const data = await EndPoints.verifyNickname(value)

      if (data) {
        return true
      }

      return false
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  const changeAvatar = async (files: any) => {
    const formData = {
      file: files,
    }
    try {
      if (user) {
        const data = await EndPoints.createAvatar(user?.id, formData)

        return data
      }
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  const logOut = async () => {
    await Cookies.remove('userId')
    await Cookies.remove('token')
    setUser(null as any)
    setToken(null as any)
    setIsAuthenticate(false)
    return true
  }

  const getToken = async () => {
    const userId = await Cookies.get('userId')
    if (userId) {
      const data: TokenData = await EndPoints.getToken(Number(userId))

      if (data) {
        setToken(data?.access_token)
        setIsAuthenticate(data?.isAuthenticate)
        return data
      }
    }

    return null
  }

  const resolveError = async (error: any, navigateTo: NavigateFunction) => {
    if ((error as any)?.response?.status === 401) {
      setShowModalError(true)

      setTimeout(async () => {
        await logOut()
        navigateTo('/')
        setShowModalError(false)
      }, 1000)
      return true
    }
    return false
  }

  /*
   *   EFFECTS
   */

  return (
    <>
      {/* <ModalComponent
        handleCancel={() => setShowModalError(false)}
        visible={showModalError}
        title="You have been logged out!"
        description="Please wait while we redirect you"
        isErrorAuth
      /> */}

      <DataContext.Provider
        value={{
          user,
          setUser,
          token,
          setToken,
          isAuthenticate,
          setIsAuthenticate,
          getUser,
          verifyNickname,
          changeAvatar,
          logOut,
          getToken,
          resolveError,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  )
}

export default AppContext
