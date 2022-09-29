import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

import { Container, Message } from './style'

interface LoadingProps {
  show: boolean
  message?: string
}

const Loading: React.FC<LoadingProps> = ({ show, message }) => {
  return (
    <>
      {show && (
        <Container>
          <CircularProgress color="secondary" />
          <Message>{message || 'Loading ...'} </Message>
        </Container>
      )}
    </>
  )
}

export default Loading
