import React from 'react'
import { Container, TextTitle, TextValue } from './style'

interface CardProps {
  title: string
  value: string
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <Container>
      <TextTitle>{title}</TextTitle>
      <TextValue>{value}</TextValue>
    </Container>
  )
}

export default Card
