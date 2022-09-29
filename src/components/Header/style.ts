import px2vw from 'utils/resize'
import { Colors } from 'styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${Colors.blackFull};

  border-bottom: 1px solid #252525;
  border-radius: 0px 0px 20px 20px;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${px2vw(10)} 20px;
`

export const ImageLogo = styled.img`
  width: ${px2vw(150)};
  height: auto;
`
