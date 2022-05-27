import { forwardRef } from 'react'
import styled, { useTheme } from 'styled-components'
import Button from './Button'
import Results from './Results'
import Wrapper from './Wrapper'

const Search = forwardRef(({ data, onClick }, ref) => {
  const theme = useTheme()
  return (
    <>
      <Wrapper flexDir="column" bgColor={theme.colors.dark}>
        <Title>search</Title>
        <Form>
          <Input ref={ref} type="text" placeholder="Insert a username" />
          <Button onClick={onClick} text="search" />
        </Form>
        {data.total_count && data.total_count !== 0 ? (
          <ResultMessage>
            {data.items?.length === 1
              ? `Found ${data.items.length} result.`
              : data.items.length <= 10
              ? `Found ${data.items.length} results.`
              : `Found ${data.total_count} results. Here are the first 10`}
          </ResultMessage>
        ) : (
          <></>
        )}
      </Wrapper>
      <Results data={data} />
    </>
  )
})

export default Search

const Title = styled.h1`
  margin-bottom: 2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`
const Input = styled.input`
  min-width: 75%;
  padding-left: 0.5rem;
  height: 2rem;
  font-size: 1.2rem;
  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.lightGray};
`
const ResultMessage = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.orange};
`
