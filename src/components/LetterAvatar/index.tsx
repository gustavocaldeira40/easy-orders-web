import { DataContext } from 'context/app'
import Cookies from 'js-cookie'
import { UserData } from 'interfaces/user'
import React, { useState, useContext, useEffect } from 'react'
import { LetterProps } from 'types/letter'
import { ContainerRounded, TextLetter } from './style'

const LetterAvatarComponent: React.FC<LetterProps> = ({
  onClick,
  isSmall,
  isBig,
  withMT,
  withoutMR,
  withoutPadding,
}) => {
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
    <ContainerRounded
      isBig={isBig}
      withMT={withMT}
      isSmall={isSmall}
      onClick={onClick}
      withoutMR={withoutMR}
      withoutPadding={withoutPadding}
    >
      <TextLetter>{user?.name?.charAt(0)}</TextLetter>
    </ContainerRounded>
  )
}
export default LetterAvatarComponent
