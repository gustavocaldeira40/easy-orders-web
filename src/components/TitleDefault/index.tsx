import React from 'react'
import {
  Container,
  ContainerColumn,
  Line,
  TextDescription,
  TextTitle,
} from './style'

type TitleDefaultTypes = {
  title: string
  description: string
  withML?: boolean
}

const TitleDefault: React.FC<TitleDefaultTypes> = ({
  description,
  title,
  withML,
}) => {
  return (
    <ContainerColumn withML={withML}>
      <Container>
        <TextTitle>{title}</TextTitle>
        <TextDescription>{description}</TextDescription>
      </Container>
      <Line />
    </ContainerColumn>
  )
}

export default TitleDefault
