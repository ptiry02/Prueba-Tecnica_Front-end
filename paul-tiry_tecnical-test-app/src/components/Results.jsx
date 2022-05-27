import { Link } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import Wrapper from './Wrapper'

const Results = ({ data, error }) => {
  const theme = useTheme()
  return (
    <>
      {data && (
        <Wrapper flexDir="column" bgColor={theme.colors.medium}>
          <List>
            {data &&
              data.map((item) => (
                <CustomLink key={item.id} to={`user/${item.login}`}>
                  <Element>
                    {item.login}, ID: {item.id}
                  </Element>
                </CustomLink>
              ))}
          </List>
        </Wrapper>
      )}
      {error && (error.id === 404 || error.id === 422) && (
        <Wrapper>
          <ErrorMessage>{error.message}</ErrorMessage>
        </Wrapper>
      )}
    </>
  )
}

export default Results

const List = styled.ol`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`
const CustomLink = styled(Link)`
  text-decoration: none;
`
const Element = styled.li`
  border: 2px solid ${({ theme }) => theme.colors.orange};
  text-align: center;
  padding: 0.5rem 0.5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.lightGray};
  :hover {
    text-decoration: underline;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.orange};
  }
`
const ErrorMessage = styled.h2`
  margin: auto;
  padding: 1.5rem 0;
  color: ${({ theme }) => theme.colors.orange};
`
