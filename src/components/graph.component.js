import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { InputFormCenter } from '../components/style/styled-form.component';

export const GraphComponent = ({ mode, data1, data2 }) => {
  return (
    <>
      <InputFormCenter>
        {mode && (
          <LineChart
            bezier
            data={{
              datasets: [
                {
                  data: [...Object.values(data1).map((n) => Math.round(n / 1000))],

                  color: (opacity = 1) => `rgba(41, 137, 255, ${opacity})`,
                },
                {
                  data: [...Object.values(data2).map((n) => Math.round(n / 1000))],

                  color: (opacity = 1) => `red`, // optional
                },
              ],
              legend: ['Cases', 'Deaths'],
            }}
            width={300} // from react-native
            height={200}
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: 'white',
              backgroundGradientFrom: 'white',
              backgroundGradientTo: 'white',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 0.6) => `rgba(41, 137, 255, ${opacity})`,
              labelColor: (opacity = 0.6) => `rgba(0, 0, 0, ${opacity})`,
              useShadowColorFromDataset: true,

              style: {
                borderRadius: 5,
              },
              propsForDots: {
                r: '2',
                strokeWidth: '1',
                stroke: 'white',
              },
            }}
            style={{ marginLeft: -15, marginRight: 0 }}
          />
        )}
        {!mode && (
          <LineChart
            data={{
              datasets: [
                {
                  data: [...Object.values(data1).map((n) => Math.round(n / 1000))],
                },
              ],
            }}
            width={300} // from react-native
            height={200}
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: 'white',
              backgroundGradientFrom: 'white',
              backgroundGradientTo: 'white',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 0.6) => `rgba(41, 137, 255, ${opacity})`,
              labelColor: (opacity = 0.6) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 5,
              },
              propsForDots: {
                r: '2',
                strokeWidth: '1',
                stroke: 'white',
              },
            }}
            bezier
            style={{ marginLeft: -15, marginRight: 0 }}
          />
        )}
      </InputFormCenter>
    </>
  );
};
