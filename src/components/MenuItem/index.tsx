import React from 'react'
import LinkComponent from 'components/Link'
import { ContainerItemAvatar, IconAvatar, TextMenuAvatar } from './style'

interface MenuItemProps {
  path: string
  pathIcon: string
  text: string
}

const MenuItemComponent: React.FC<MenuItemProps> = ({
  path,
  pathIcon,
  text,
}) => {
  return (
    <LinkComponent path={path}>
      <ContainerItemAvatar>
        <IconAvatar src={pathIcon} alt="Change password of user icon" />

        <TextMenuAvatar>{text}</TextMenuAvatar>
      </ContainerItemAvatar>
    </LinkComponent>
  )
}

export default MenuItemComponent
