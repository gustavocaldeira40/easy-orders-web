import React, { useState } from 'react'
import { Button, Drawer, ListItemIcon } from '@mui/material'

import MenuOpenIcon from 'assets/icons/menu-open.png'
import MenuCloseIcon from 'assets/icons/menu-close.png'
import ArrowDownIcon from 'assets/icons/arrow-down.png'
import ArrowRightIcon from 'assets/icons/arrow-right.png'
import { Colors } from 'styles/colors'
import AppBar from '@mui/material/AppBar'
import { List } from '@material-ui/core'
import ListItemText from '@mui/material/ListItemText'
import { innerHeight } from 'utils/window'
import { DrawerItemProps } from 'interfaces/drawer-item'
import Hidden from '@mui/material/Hidden/Hidden'
import MenuIcon from '@mui/icons-material/Menu'
import {
  ContainerIconMenu,
  ContainerItem,
  IconMenu,
  IconMenuOpen,
  LineDown,
} from './style'
import { listMenu } from './list-menu'
import DrawerClose from './drawer-close'
import SubMenu from './sub-menu'

const DrawerComponent: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [itemSelected, setItemSelected] = useState({} as DrawerItemProps)

  return (
    <>
      {/* Screen < 600px */}

      {/* Screen > 600px */}
      <Hidden smDown implementation="css">
        <AppBar
          style={{
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            minHeight: 50,
            left: 20,
          }}
          position="fixed"
        >
          <IconMenuOpen src={MenuOpenIcon} onClick={() => setOpen(true)} />
        </AppBar>

        <Drawer
          style={{ position: 'relative' }}
          anchor="left"
          open={open}
          onClose={() => setOpen(!open)}
        >
          <List
            style={{
              backgroundColor: Colors.blackFull,
              paddingTop: 70,
              width: 200,
              height: `${innerHeight}px`,
              cursor: 'pointer',
            }}
          >
            {listMenu?.map((item, index) => {
              return (
                <>
                  <ContainerItem
                    onClick={() => {
                      setItemSelected(item)
                    }}
                  >
                    <List
                      key={index}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: 10,
                      }}
                    >
                      <ListItemIcon
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                        }}
                      >
                        {item?.icon}
                      </ListItemIcon>

                      <ListItemText
                        primary={item?.name}
                        style={{
                          fontWeight: 500,
                          color: Colors.white,
                          fontFamily: 'Roboto Condensed',
                          textTransform: 'uppercase',
                        }}
                      />
                    </List>

                    <ContainerIconMenu>
                      {itemSelected?.name === item?.name ? (
                        <IconMenu src={ArrowDownIcon} />
                      ) : (
                        <IconMenu src={ArrowRightIcon} />
                      )}
                    </ContainerIconMenu>
                  </ContainerItem>

                  <SubMenu item={item} itemSelected={itemSelected} />
                  <LineDown />
                </>
              )
            })}
          </List>
        </Drawer>

        {!open ? <DrawerClose open={open} setOpen={setOpen} /> : null}
      </Hidden>
    </>
  )
}

export default DrawerComponent
