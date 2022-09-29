import React from 'react'
import Logo from 'assets/visual/easy-orders.png'
import { Container, ImageLogo } from './style'

const Header: React.FC = () => {
  return (
    <Container>
      <ImageLogo src={Logo} alt="Logo Easy Orders" />
    </Container>
  )
}

export default Header
