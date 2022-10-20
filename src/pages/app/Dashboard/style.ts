import styled from 'styled-components'
import { Colors } from 'styles/colors'

import BGScreen from 'assets/images/bg-lines.png'

const { innerHeight } = window

export const Container = styled.div`
  display: flex;
  height: ${innerHeight}px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;


`
