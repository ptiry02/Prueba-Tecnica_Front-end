import styled from 'styled-components'
import { theme } from '../helpers/constants'

const Wrapper = ({
  flexDir = 'row',
  bgColor = theme.colors.dark,
  children,
}) => {
  return (
    <Div flexDir={flexDir} bgColor={bgColor}>
      {children}
    </Div>
  )
}

export default Wrapper

const Div = styled.div`
  display: flex;
  flex-direction: ${({ flexDir }) => flexDir};
  align-items: center;
  margin: 4rem 0;
  width: 50vw;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 1rem;
  box-shadow: 0px 4px 25px gray;
  padding: 0 2rem;
`
