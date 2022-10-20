import React from 'react'

import { Collapse, List } from '@mui/material'
import styled from 'styled-components'

import ArrowRightIcon from 'assets/icons/arrow-right.png'
import { DrawerItemProps } from 'interfaces/drawer-item'
import { IconSubMenu, TextSubMenu } from './style'

interface SubMenuProps {
  item: DrawerItemProps
  itemSelected: DrawerItemProps
}

const SubMenu: React.FC<SubMenuProps> = ({ item, itemSelected }) => {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 10,
    padding: 5,
  }

  return (
    <Collapse
      in={itemSelected?.name === item?.name}
      timeout="auto"
      unmountOnExit
    >
      {item?.subMenu?.map((text, index) => {
        return (
          <List key={index} style={style as any} component="div" disablePadding>
            <TextSubMenu>{text}</TextSubMenu>
            <IconSubMenu src={ArrowRightIcon} />
          </List>
        )
      })}
      )
    </Collapse>
  )
}

export default SubMenu
