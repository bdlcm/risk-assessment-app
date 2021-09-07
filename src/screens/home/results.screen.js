/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SafeArea } from '../../components/utility/safe-area.components';
import React, { useContext, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { Spacer } from '../../components/style/spacer.component';
import { Text, FlatList, ScrollView } from 'react-native';
import { CircleComponent } from '../../components/style/circle-animation.component';
import { vaccineComputation } from '../../services/vaccine.service';
import { LocationContext } from '../../context/results.context';
import {
  MiniCardBody,
  Number,
  Label,
  AssessmentText,
} from '../../components/style/mini-card.component';
import {
  CardContainer,
  ResultCard,
  CardBackground,
  ResultCardBackground,
  ResultText,
} from '../../components/style/result-card.component';
import { MiniCardContainer, MiniResultCard } from '../../components/style/mini-card.component';
import { GraphContext } from '../../context/graph.context';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from 'react-native-chart-kit';

export const ResultsScreen = ({ route }) => {
  // eslint-disable-next-line react/prop-types

  const { age, sex, area, country } = route.params;
  // const { location, setLocation } = useState();
  const { location, retrieveCountry, countryInfo } = useContext(LocationContext);
  const { graphInfo, retrieveGraphInfo } = useContext(GraphContext);

  const results = vaccineComputation(age, sex, area);
   useEffect(() => {
    retrieveCountry();
    retrieveGraphInfo();
    console.log(Object.values(graphInfo).map((n) => n / 1000));
  }, []);

  return (
    <SafeArea>
      <CardContainer>
        <ScrollView>
          <CardBackground>
            <ResultCardBackground>
              <ResultText>
                {sex}, {age}{' '}
              </ResultText>

              {countryInfo.country != 'USA' && <ResultText> {countryInfo.country} </ResultText>}
              {countryInfo.country == 'USA' && (
                <ResultText>
                  {' '}
                  {area}, {countryInfo.country}{' '}
                </ResultText>
              )}
            </ResultCardBackground>
          </CardBackground>

          <AssessmentText>Location Assessment</AssessmentText>
          <MiniCardContainer>
            {countryInfo.country == 'USA' && (
              <MiniResultCard>
                <Number>{location.active} </Number>
                <Label>Total Cases in {area} </Label>
              </MiniResultCard>
            )}

            <MiniResultCard>
              <Number>{countryInfo.active} </Number>
              <Label>Total Active Cases </Label>
            </MiniResultCard>

            <MiniResultCard>
              <Number>{countryInfo.cases} </Number>
              <Label>Total Recorded Cases </Label>
            </MiniResultCard>
          </MiniCardContainer>

          <MiniCardContainer>
            <MiniResultCard>
              <LineChart
                data={{
                  datasets: [
                    {
                      data: [...Object.values(graphInfo).map((n) => n / 1000)],
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
              <Number>Cases in last 90 days in {countryInfo.country} </Number>
            </MiniResultCard>
          </MiniCardContainer>

          <Spacer position="top" size="large">
            <AssessmentText>Vaccine Assessment</AssessmentText>
          </Spacer>
          {results.map((item) => (
            <MiniCardContainer key={item.id}>
              <MiniResultCard>
                <Number>{item.vaccine} </Number>
                <Label>Vaccine </Label>
                <CircleComponent arc={item.risk}></CircleComponent>
              </MiniResultCard>
            </MiniCardContainer>
          ))}
        </ScrollView>
      </CardContainer>
    </SafeArea>
  );
};
