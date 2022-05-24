import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Search = () => {
  const input = useRef()
  const [searchValue, setSearchValue] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.github.com/search/users?q=${input.current.value}`)
      .then((response) => response.json())
      .then((data) => setSearchValue(data.items))
  }

  return (
    <>
      <Wrapper>
        <h1>search</h1>
        <Form>
          <input ref={input} type="text" placeholder="Insert a username" />
          <button onClick={handleSubmit}>search</button>
        </Form>
      </Wrapper>
      <List>
        {searchValue &&
          searchValue.map((item) => <li key={item.id}>{item.login}</li>)}
      </List>
    </>
  )
}

export default Search

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  width: 50vw;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 1rem;
  box-shadow: 0px 4px 25px gray;
  padding: 0 2rem;
  h1 {
    margin-top: 3rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.orange};
  }
  input {
    min-width: 75%;
    padding-left: 0.5rem;
    height: 2rem;
    margin: 3rem 0;
    font-size: 1.2rem;
    border-radius: 0.4rem;
  }
`
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  button {
    text-transform: uppercase;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightgray};
    background-color: ${({ theme }) => theme.colors.light};
    min-width: 15%;
    height: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
    border-radius: 0.4rem;
    box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.lightgray};
  }
  button:hover {
    border: 1px solid ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};
  }
  button:active {
    box-shadow: 0px 0px 3px black inset;
  }
`
const List = styled.ul`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`
