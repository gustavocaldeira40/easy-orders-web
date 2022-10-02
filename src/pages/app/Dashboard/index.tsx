import DrawerComponent from 'components/Drawer'
import Header from 'components/Header'
import React from 'react'
import { Container } from './style'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header withText="Welcome" />
    </Container>
  )
}

export default Dashboard
