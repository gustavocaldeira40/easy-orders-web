import React, { useState } from 'react'
import { Button, Drawer, ListItemIcon } from '@mui/material'

import ClientsIcon from 'assets/icons/clients.png'
import OrdersIcon from 'assets/icons/orders.png'
import ProductsIcon from 'assets/icons/products.png'
import MenuOpenIcon from 'assets/icons/menu-open.png'
import MenuCloseIcon from 'assets/icons/menu-close.png'

import { Colors } from 'styles/colors'
import AppBar from '@mui/material/AppBar'
import { List } from '@material-ui/core'
import Hidden from '@mui/material/Hidden'
import ListItemText from '@mui/material/ListItemText'
import { IconMenu, IconMenuOpen } from './style'

const { innerWidth, innerHeight } = window

const DrawerComponent: React.FC = () => {
  const [open, setOpen] = useState(false)

  const data = [
    {
      name: 'Clients',
      icon: <IconMenu src={ClientsIcon} />,
    },
    {
      name: 'Orders',
      icon: <IconMenu src={OrdersIcon} />,
    },
    {
      name: 'Products',
      icon: <IconMenu src={ProductsIcon} />,
    },
  ]

  return (
    <>
      <AppBar
        style={{
          backgroundColor: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          minHeight: 50,
          left: 17,
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
            width: 180,
            height: `${innerHeight}px`,
          }}
        >
          {data?.map((item, index) => {
            return (
              <List
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  borderBottom: `1px solid ${Colors.textMatte}`,
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
                    padding: 10,
                    color: Colors.white,
                    fontFamily: 'Roboto Condensed',
                  }}
                />
              </List>
            )
          })}
        </List>
      </Drawer>

      {!open ? (
        <Hidden smDown implementation="css">
          <div
            style={{
              width: 50,
              height: 500,
              left: 0,
              top: 20,
              position: 'fixed',
              display: 'flex',
            }}
          >
            <List
              style={{
                backgroundColor: Colors.blackFull,
                paddingTop: 50,
                height: `${innerHeight}px`,
              }}
            >
              {data?.map((item, index) => {
                return (
                  <ListItemIcon
                    onClick={() => setOpen(!open)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 5,
                      width: 50,
                      height: 50,
                      cursor: 'pointer',
                    }}
                  >
                    {item?.icon}
                  </ListItemIcon>
                )
              })}
            </List>
          </div>
        </Hidden>
      ) : null}
    </>
  )
}

export default DrawerComponent
