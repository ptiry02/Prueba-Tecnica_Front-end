import { ThemeProvider } from 'styled-components'
import GlobalStyle from './assets/globalStyles'
import Search from './components/Search'

const theme = {
  colors: {
    dark: '#1B208C',
    medium: '#464AA6',
    light: '#787CBF',
    lightgray: '#F2F2F0',
    orange: '#F2BC79',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Search />
    </ThemeProvider>
  )
}

export default App
