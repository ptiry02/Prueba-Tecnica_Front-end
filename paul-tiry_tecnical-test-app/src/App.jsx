import { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './helpers/constants'
import useFetch from './hooks/useFetch'
import GlobalStyle from './assets/globalStyles'
import Search from './components/Search'
import User from './components/User'

function App() {
  const input = useRef()
  const { searchValue, getUsers } = useFetch()

  const handleSubmit = (e) => {
    e.preventDefault()
    getUsers(input.current.value)
    input.current.value = ''
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <Search ref={input} onClick={handleSubmit} data={searchValue} />
          }
        ></Route>
        <Route path="/user/:login" element={<User />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
