import { forwardRef } from 'react'
import styled, { useTheme } from 'styled-components'
import Button from './Button'
import Results from './Results'
import Wrapper from './Wrapper'

const Search = forwardRef(({ data, onClick, error }, ref) => {
  const theme = useTheme()

  if (error) {
  }
  return (
    <>
      <Wrapper flexDir="column" bgColor={theme.colors.dark}>
        <Title>search</Title>
        <Form>
          <Input ref={ref} type="text" placeholder="Insert a username" />
          <Button onClick={onClick} text="search" />
        </Form>
      </Wrapper>
      <Results data={data} error={error} />
    </>
  )
})

export default Search

const Title = styled.h1`
  margin-top: 3rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};
`
const Input = styled.input.attrs(({ err }) => ({}))`
  min-width: 75%;
  padding-left: 0.5rem;
  height: 2rem;
  margin: 3rem 0;
  font-size: 1.2rem;
  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.lightGray};
`
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`
