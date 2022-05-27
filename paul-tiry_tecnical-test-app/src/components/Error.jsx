import styled, { useTheme } from 'styled-components'

const Error = ({ children, text }) => {
  const theme = useTheme()
  return <Message>{children || text}</Message>
}

export default Error

const Message = styled.p``
