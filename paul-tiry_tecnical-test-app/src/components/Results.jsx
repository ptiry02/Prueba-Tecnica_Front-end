import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../helpers/constants'
import Wrapper from './Wrapper'

const Results = ({ data }) => {
  return (
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
  border: 2px solid ${theme.colors.orange};
  text-align: center;
  padding: 0.5rem 0.5rem;
  border-radius: 10px;
  background-color: ${theme.colors.dark};
  color: ${theme.colors.lightgray};
  :hover {
    text-decoration: underline;
    cursor: pointer;
    color: ${theme.colors.orange};
  }
`
