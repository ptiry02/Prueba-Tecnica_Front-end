import { useRef, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/themeColors'
import useFetch from './hooks/useFetch'
import GlobalStyle from './theme/globalStyles'
import Search from './components/Search'
import User from './components/User'

function App() {
  const input = useRef()
  const { searchData, search } = useFetch()
  console.log('change in data?: ', searchData)

  const handleSubmit = (e) => {
    e.preventDefault()
    search(input.current.value)
    input.current.value = ''
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <Search ref={input} onClick={handleSubmit} data={searchData} />
          }
        ></Route>
        <Route path="/user/:login" element={<User />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
