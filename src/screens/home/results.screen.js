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
  VaccineResultsContainer,
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

import { GraphComponent } from '../../components/graph.component';

export const ResultsScreen = ({ route }) => {
  // eslint-disable-next-line react/prop-types

  const { age, sex, area, country } = route.params;
  // const { location, setLocation } = useState();
  const { location, retrieveCountry, countryInfo, retrieveLocation } = useContext(LocationContext);
  const { graphInfo, retrieveGraphInfo } = useContext(GraphContext);
  const results = vaccineComputation(age, sex, area);
  useEffect(() => {
    retrieveCountry();
    retrieveGraphInfo();

    retrieveLocation();

    console.log('location', location);
  }, []);

  return (
    <SafeArea>
      <CardContainer>
        <ScrollView>
          <Spacer position="top" size="large">
            <AssessmentText>Vaccine Assessment</AssessmentText>
          </Spacer>
          {results.map((item) => (
            <MiniCardContainer key={item.id}>
              <MiniResultCard>
                <Number>{item.vaccine} </Number>
                <Label>Vaccine </Label>
                {item.case.map((each) => (
                  <VaccineResultsContainer key={each.id}>
                    <Number>{each.risk} </Number>
                    <Label>{each.se} </Label>
                  </VaccineResultsContainer>
                ))}
              </MiniResultCard>
            </MiniCardContainer>
          ))}

          <AssessmentText>Location Assessment</AssessmentText>

          {graphInfo && (
            <MiniCardContainer>
              <MiniResultCard>
                
                <GraphComponent data={graphInfo}>

                </GraphComponent>
                <Number>Cases in last 90 days in {countryInfo.country} </Number>
              </MiniResultCard>
            </MiniCardContainer>
          )}

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
        </ScrollView>
      </CardContainer>
    </SafeArea>
  );
};
