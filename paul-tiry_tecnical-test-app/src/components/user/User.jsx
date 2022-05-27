import { useParams } from 'react-router'
import useFetch from '../../hooks/useFetch'
import Chart from './Chart'
import UserInfo from './UserInfo'

const User = () => {
  const user = useParams()
  const { userData, fetchUser } = useFetch()
  fetchUser(user.login)

  return (
    <>
      <UserInfo userData={userData} />
      <Chart userData={userData} />
    </>
  )
}

export default User
