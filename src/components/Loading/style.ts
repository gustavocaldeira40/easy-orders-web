import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  position: absolute;
  z-index: 3;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: #00000099;
`

export const Message = styled.span`
  color: white;
  font-size: 1.2rem;
  font-family: Roboto;
  margin-top: 10px;
`
