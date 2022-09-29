import { Colors } from 'styles/colors'
import styled, { keyframes } from 'styled-components'
import { bounce, fadeIn } from 'react-animations'

const bounceAnimation = keyframes`${fadeIn}`

export const Container = styled.div<any>`
  background-color: ${Colors.bgContainer};
  border-radius: 25px;
  min-height: 80vh;
  width: ${(props) => (props.width ? props.width : '80%')};
  margin: 30px;
  padding: ${(props) => (props.between ? '30px' : '20px 30px')};
  display: flex;
  justify-content: ${(props) => (props.between ? 'space-between' : 'center')};
  flex-direction: column;
  animation: 2s ${bounceAnimation};
`
