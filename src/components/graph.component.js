import React from 'react';
import { LineChart } from 'react-native-chart-kit';

export const GraphComponent = ({ data }) => {
  return (
    <>
      <LineChart
        data={{
          datasets: [
            {
              data: [...Object.values(data).map((n) => Math.round(n / 1000))],
            },
          ],
        }}
        width={350} // from react-native
        height={220}
        yAxisSuffix="k"
        yAxisInterval={1000} // optional, defaults to 1
        chartConfig={{
          backgroundColor: 'white',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 0.6) => `rgba(41, 137, 255, ${opacity})`,
          labelColor: (opacity = 0.6) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 5,
          },
          propsForDots: {
            r: '2',
            strokeWidth: '1',
            stroke: '#2989FF',
          },
        }}
        bezier
        style={{}}
      />
    </>
  );
};
