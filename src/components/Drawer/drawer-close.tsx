import React from 'react'
import { Hidden, ListItemIcon } from '@mui/material'
import { Colors } from 'styles/colors'
import { List } from '@material-ui/core'
import { innerHeight } from 'utils/window'
import { listMenu } from './list-menu'

interface DrawerCloseProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DrawerClose: React.FC<DrawerCloseProps> = ({ open, setOpen }) => {
  return (
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
          {listMenu?.map((item, index) => {
            return (
              <ListItemIcon
                key={index}
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
  )
}

export default DrawerClose
