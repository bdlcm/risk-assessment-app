import React from 'react';
import {
  LineChart,

} from 'react-native-chart-kit';

export const GraphComponent = ({ data }) => {
  return (
    <>
      <LineChart
        data={{
          datasets: [
            {
              data: [...Object.values(data).map((n) => n / 1000)],
            },
          ],
        }}
        width={350} // from react-native
        height={220}
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#5754D7',
          backgroundGradientFrom: '#5754D7',
          backgroundGradientTo: '#5754D7',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 5,
          },
          propsForDots: {
            r: '4',
            strokeWidth: '1',
            stroke: '#5754D7',
          },
        }}
        bezier
        style={{}}
      />
    </>
  );
};
