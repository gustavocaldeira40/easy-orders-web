import { Colors } from 'styles/colors'
import { createGlobalStyle } from 'styled-components'
import px2vw from '../utils/resize'

export const { innerWidth, innerHeight } = window

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Roboto', 'Roboto Condensed', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${Colors.bg};
    /* height: ${innerHeight}; */
    
}

:root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`

export default GlobalStyle
