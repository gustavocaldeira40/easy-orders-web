import React, { ReactNode } from 'react'
import { Button } from '@mui/material'
import { Colors } from 'styles/colors'
import { ButtonBaseActions } from '@mui/material/ButtonBase'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
  styles?: any
}

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  styles,
}) => {
  return (
    <Button
      style={{
        backgroundColor: Colors.buttonPrimary,
        color: Colors.white,
        borderRadius: 15,
        padding: 10,
        ...styles,
      }}
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      sx={{ width: 120 }}
      color="inherit"
      size="large"
    >
      {children}
    </Button>
  )
}

export default ButtonComponent
