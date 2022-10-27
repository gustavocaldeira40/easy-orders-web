import React, { useState } from 'react'
import Logo from 'assets/visual/easy-orders.png'
import DrawerComponent from 'components/Drawer'
import { TextLetter } from 'components/LetterAvatar/style'
import LetterAvatarComponent from 'components/LetterAvatar'
import MenuItemComponent from 'components/MenuItem'

import LogOutIcon from 'assets/icons/logout.png'
import MyDataIcon from 'assets/icons/user.png'
import PasswordIcon from 'assets/icons/password.png'
import { ContainerItemAvatar, TextMenuAvatar } from 'components/MenuItem/style'
import MenuIcon from 'assets/icons/menu.png'
import {
  Container,
  ContainerCenter,
  ContainerMenuAvatar,
  IconLogout,
  IconMenu,
  ImageLogo,
  TextNameUser,
  TextTitle,
} from './style'

interface HeaderProps {
  withText?: string
  withoutMenu?: boolean
  isHamburguer?: boolean
}

const Header: React.FC<HeaderProps> = ({
  withText,
  withoutMenu,
  isHamburguer,
}) => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */

  /*
   *   STATES
   */

  const [loading, setLoading] = useState(false)
  const [showMenuAvatar, setShowMenuAvatar] = useState(false)

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

  /*
   *   EFFECTS
   */

  return (
    <>
      <Container>
        <ContainerCenter>
          {withText ? (
            <TextTitle>{withText}</TextTitle>
          ) : (
            <ImageLogo src={Logo} alt="Logo Easy Orders" />
          )}
        </ContainerCenter>
        {isHamburguer ? (
          <IconMenu src={MenuIcon}  onClick={() => setShowMenuAvatar((oldState) => !oldState)} />
        ) : (
          <>
            <TextNameUser>Gustavo Henrique</TextNameUser>

            <LetterAvatarComponent
              onClick={() => setShowMenuAvatar((oldState) => !oldState)}
            />
          </>
        )}

        {showMenuAvatar && (
          <ContainerMenuAvatar>
            <MenuItemComponent
              path="/user-data"
              pathIcon={MyDataIcon}
              text="My Data"
            />

            <MenuItemComponent
              path="/change-password"
              pathIcon={PasswordIcon}
              text="Change Password"
            />

            <ContainerItemAvatar onClick={() => {}}>
              <IconLogout src={LogOutIcon} alt="logout icon" />

              <TextMenuAvatar>Logout</TextMenuAvatar>
            </ContainerItemAvatar>
          </ContainerMenuAvatar>
        )}
      </Container>

      {!withoutMenu && <DrawerComponent />}
    </>
  )
}

export default Header
