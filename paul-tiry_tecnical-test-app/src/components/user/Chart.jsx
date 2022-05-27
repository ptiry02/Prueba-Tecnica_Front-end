import { useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'
import useFetch from '../../hooks/useFetch'

const Chart = ({ userName }) => {
  const theme = useTheme()
  const { userData, fetchUser } = useFetch()
  const info = [
    {
      x: 'Following',
      y:
        userData.following !== 0
          ? userData.following
          : toString(userData.following),
      label: userData.following,
    },
    {
      x: 'Followers',
      y:
        userData.followers !== 0
          ? userData.followers
          : toString(userData.followers),
      label: userData.followers,
    },
  ]
  useEffect(() => {
    fetchUser(userName)
  }, [userName, fetchUser])
  return (
    <ChartWrapper bgColor={theme.colors.light}>
      <VictoryChart
        domainPadding={90}
        style={{ parent: { height: 180, width: 300 } }}
      >
        <VictoryAxis domain={[1, 2]} style={{ tickLabels: { fontSize: 22 } }} />
        <VictoryAxis
          dependentAxis={
            userData.followers === 0 && userData.following === 0 ? false : true
          }
          style={{ tickLabels: { fontSize: 22 } }}
        />
        <VictoryBar
          data={info}
          x="x"
          y="y"
          style={{
            data: { fill: theme.colors.dark },
            labels: { fontSize: 22 },
          }}
        />
      </VictoryChart>
    </ChartWrapper>
  )
}

export default Chart

const ChartWrapper = styled.div`
  padding: 0.8rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 1rem;
  box-shadow: 0px 4px 25px gray;
`
