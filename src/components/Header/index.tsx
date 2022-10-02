import React from 'react'
import Logo from 'assets/visual/easy-orders.png'
import DrawerComponent from 'components/Drawer'
import {
  Container,
  ContainerCenter,
  ImageLogo,
  TextNameUser,
  TextTitle,
} from './style'

interface HeaderProps {
  withText?: string
}

const Header: React.FC<HeaderProps> = ({ withText }) => {
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
        <TextNameUser>Gustavo Henrique</TextNameUser>
      </Container>

      <DrawerComponent />
    </>
  )
}

export default Header
