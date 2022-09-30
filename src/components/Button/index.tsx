import React, { ReactNode } from 'react'
import { Button } from '@mui/material'
import { Colors } from 'styles/colors'
import { ButtonBaseActions } from '@mui/material/ButtonBase'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
  styles?: any

  outlined?: boolean
}

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  styles,
  outlined,
}) => {
  return (
    <Button
      style={{
        backgroundColor: outlined ? 'transparent' : Colors.buttonPrimary,
        color: Colors.white,
        borderRadius: 15,
        padding: 10,
        margin: 10,
        ...styles,
      }}
      onClick={onClick}
      disabled={disabled}
      variant={outlined ? 'outlined' : 'contained'}
      sx={{ width: 140 }}
      color="inherit"
      size="large"
    >
      {children}
    </Button>
  )
}

export default ButtonComponent
