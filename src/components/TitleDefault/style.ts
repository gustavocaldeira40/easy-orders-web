import { Colors } from 'styles/colors'
import styled from 'styled-components'
import px2vw from 'utils/resize'

export const ContainerColumn = styled.div<any>`
  padding: 20px;
  margin-left: ${(props) => (props.withML ? '10%' : 0)};

  @media (max-width: 720px) {
    margin-left: 0;
  }
`

export const Container = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`

export const TextTitle = styled.h1`
  font-family: 'Roboto Condensed';
  font-weight: 600;
  font-size: ${px2vw(45)}px;
  text-transform: uppercase;
  color: ${Colors.white};
`

export const TextDescription = styled.div`
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  font-size: ${px2vw(30)}px;

  color: ${Colors.textDescriptionTitle};
`

export const Line = styled.div`
  width: 100%;
  border-radius: 40px;
  border: 1px solid ${Colors.line};
`
