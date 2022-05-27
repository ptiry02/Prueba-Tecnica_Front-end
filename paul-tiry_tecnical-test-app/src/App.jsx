import { useRef, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/themeColors'
import useFetch from './hooks/useFetch'
import GlobalStyle from './theme/globalStyles'
import Search from './components/Search'
import User from './components/User'

function App() {
  const input = useRef()
  const { error, usersList, search } = useFetch()

  const handleSubmit = (e) => {
    e.preventDefault()
    search(input.current.value)
    input.current.value = ''
  }

  useEffect(() => {}, [error, usersList])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <Search
              ref={input}
              onClick={handleSubmit}
              data={usersList}
              error={error}
            />
          }
        ></Route>
        <Route path="/user/:login" element={<User />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
