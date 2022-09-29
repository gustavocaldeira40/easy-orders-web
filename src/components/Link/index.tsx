import React, { ReactNode } from 'react'
import { LinkProps } from 'types/link'
import { LinkText } from './style'

const LinkComponent: React.FC<LinkProps> = ({ children, path, style }) => {
  return (
    <LinkText style={style} to={path}>
      {children}
    </LinkText>
  )
}

export default LinkComponent
