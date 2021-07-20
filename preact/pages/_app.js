import { createGlobalStyle, ThemeProvider } from 'styled-components'
import firebase from '../src/firebase/firebaseInit'
firebase()

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: #1e1e22;
  }
  body::-webkit-scrollbar {
    width: 0.5em;
  }
  
  body::-webkit-scrollbar-track {
    background: #16131B;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: #A020F0;
    /*outline: 1px solid slategrey;*/
    border-radius: 0.5em;
  }
  a {
    text-decoration: none;
  }
`

const theme = {
  colors: {
    primary: 'RED',
    description: 'BLUE'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}