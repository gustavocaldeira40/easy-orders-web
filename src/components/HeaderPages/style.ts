import { Colors } from 'styles/colors'
import styled from 'styled-components'
import { WidthFull } from '@mui/icons-material'

export const Container = styled.div<any>`
  margin: ${(props) => (props.withoutMargin ? '20px' : '50px 20px 20px 90px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TextTitle = styled.h2`
  font-family: 'Roboto Condensed';
  font-weight: 600;
  text-transform: uppercase;
  color: ${Colors.white};
`

export const TextDescription = styled.span`
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  font-size: 1.2rem;

  color: #9f9f9f;
`

export const LineBottom = styled.div`
  width: 100%;
  border: 1px solid #dadada;
  margin: 20px 0;
`

export const Icon = styled.img`
  width: 30px;
`
