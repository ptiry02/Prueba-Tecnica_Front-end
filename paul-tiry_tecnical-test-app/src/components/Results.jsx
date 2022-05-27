import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import Wrapper from './Wrapper'

const Results = ({ data }) => {
  const theme = useTheme()

  return (
    <>
      {data.total_count && data.total_count !== 0 ? (
        <Wrapper flexDir="column" bgColor={theme.colors.medium}>
          <List>
            {data.items?.slice(0, 10).map((item) => (
              <CustomLink key={item.id} to={`user/${item.login}`}>
                <Element>
                  {item.login}, ID: {item.id}
                </Element>
              </CustomLink>
            ))}
          </List>
        </Wrapper>
      ) : (
        <></>
      )}
      {data.error && (
        <Wrapper>
          <ErrorMessage>{data.error.message}</ErrorMessage>
        </Wrapper>
      )}
    </>
  )
}

export default Results

const List = styled.ol`
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
  color: ${({ theme }) => theme.colors.orange};
`
