import { Colors } from 'styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${Colors.bgContainer};
  width: 25vw;
  padding: 40px;
  border-radius: 20px;
  margin: 20px;
  margin-left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TextTitle = styled.span`
  font-family: 'Roboto';
  font-size: 1.4rem;
  margin: 0 0 20px 0;
  color: ${Colors.white};
`

export const TextValue = styled.span`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1.5rem;

  color: ${Colors.white};
`
