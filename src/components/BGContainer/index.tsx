import TitleDefault from 'components/TitleDefault'
import React from 'react'
import { BgContainerType } from 'types/container'
import { Container } from './style'

const BGContainer: React.FC<BgContainerType> = ({
  children,
  between,
  width,
}) => {
  return (
    <Container between={between} width={width}>
      {children}
    </Container>
  )
}

export default BGContainer
