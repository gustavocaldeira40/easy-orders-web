import { DataContext } from 'context/app'
import Cookies from 'js-cookie'
import { UserData } from 'interfaces/user'
import React, { useState, useContext, useEffect } from 'react'
import { LetterProps } from 'types/letter'
import { ContainerDark, ContainerRounded, TextLetter } from './style'

const LetterAvatarComponent: React.FC<LetterProps> = ({ onClick }) => {
  /*
   *   CONTEXT
   */
  const { getUser } = useContext(DataContext)

  /*
   *   REFS
   */

  /*
   *   STATES
   */
  const [user, setUser] = useState<UserData>(null as any)

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
  const getUserData = async () => {
    const id = Cookies.get('userId')
    if (id) {
      const userActually = await getUser(Number(id))
      if (userActually !== null) {
        setUser(userActually as any)
      }
    }
  }

  /*
   *   EFFECTS
   */

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <ContainerRounded onClick={onClick}>
      <ContainerDark>
        <TextLetter>{user?.name?.charAt(0) || 'T'}</TextLetter>
      </ContainerDark>
    </ContainerRounded>
  )
}
export default LetterAvatarComponent
