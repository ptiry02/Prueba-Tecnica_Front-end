import { useTheme } from 'styled-components'
import Wrapper from '../Wrapper'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'

const Chart = ({ userData }) => {
  const theme = useTheme()
  const info = [
    { x: 'Following', y: userData.following, label: userData.following },
    { x: 'Followers', y: userData.followers, label: userData.followers },
  ]
  return (
    <Wrapper bgColor={theme.colors.light}>
      <VictoryChart domainPadding={90}>
        <VictoryAxis domain={[1, 2]} />
        <VictoryAxis dependentAxis />
        <VictoryBar
          data={info}
          x="x"
          y="y"
          style={{ data: { fill: theme.colors.dark } }}
        />
      </VictoryChart>
    </Wrapper>
  )
}

export default Chart
