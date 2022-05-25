import { useParams } from 'react-router'
import styled from 'styled-components'
import { FaGithubSquare } from 'react-icons/fa'
import { BsPersonBadge, BsPersonPlusFill } from 'react-icons/bs'
import useFetch from '../hooks/useFetch'
import Wrapper from './Wrapper'

const User = () => {
  const user = useParams()
  const { userInfo, getInfo } = useFetch()
  getInfo(user.login)

  return (
    <Wrapper flexDir="row">
      <Img
        src={userInfo.avatar_url}
        alt={userInfo.login}
        title={userInfo.login}
      />
      <Info>
        <Title>{userInfo.login}</Title>
        <ul>
          <ListElement>
            <FaGithubSquare size={'2rem'} />
            <li>Number of public repos: {userInfo.public_repos}</li>
          </ListElement>
          <ListElement>
            <BsPersonBadge size={'2rem'} />
            <li>Following: {userInfo.following} users.</li>
          </ListElement>
          <ListElement>
            <BsPersonPlusFill size={'2rem'} />
            <li>Number of followers: {userInfo.followers}</li>
          </ListElement>
        </ul>
      </Info>
    </Wrapper>
  )
}

export default User

const Title = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.orange};
`
const Img = styled.img`
  margin: 3rem 0;
  border-radius: 50px;
  max-width: 200px;
  overflow: hidden;
`
const Info = styled.div`
  margin: 3rem 0 0 2rem;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  ul {
    list-style: none;
    color: ${({ theme }) => theme.colors.lightgray};
  }
`
const ListElement = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  li {
    margin-left: 0.5rem;
  }
`
