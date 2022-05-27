import { useState } from 'react'
import { getUsers, getInfo } from '../apis/get'

const useFetch = () => {
  const [error, setError] = useState({})
  const [usersList, setUsersList] = useState()
  const [userData, setUserData] = useState({})

  const search = async (value) => {
    const item = await getUsers(value)
    if (item.error === true) {
      setUsersList()
      setError(item)
    } else {
      setError({})
      setUsersList(item.items.slice(0, 10))
    }
  }

  const fetchUser = async (value) => {
    const item = await getInfo(value)
    setUserData(item)
  }

  return {
    error,
    usersList,
    userData,
    search,
    fetchUser,
  }
}
export default useFetch
