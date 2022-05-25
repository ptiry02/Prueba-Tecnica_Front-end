import { useState, useCallback, useEffect } from 'react'

const useFetch = () => {
  const [searchValue, setSearchValue] = useState([])
  const [userInfo, setUserInfo] = useState({})

  const getUsers = async (value) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${value}`
    )
    const jsonResponse = await response.json()
    const usersList = jsonResponse.items
    setSearchValue(usersList.slice(0, 10))
  }

  const getInfo = async (login) => {
    const response = await fetch(`https://api.github.com/users/${login}`)
    const jsonResponse = await response.json()
    setUserInfo(jsonResponse)
  }

  return {
    searchValue,
    userInfo,
    getUsers,
    getInfo,
  }
}
export default useFetch
