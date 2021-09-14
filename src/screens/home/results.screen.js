/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SafeArea } from '../../components/utility/safe-area.components';
import React, { useContext, useState, useEffect } from 'react';
import { Spacer } from '../../components/style/spacer.component';
import { Text, FlatList, ScrollView } from 'react-native';
import { vaccineComputation } from '../../services/vaccine.service';
import { LocationContext } from '../../context/results.context';
import {
  MiniCardBody,
  Number,
  Label,
  VaccineNumber,
  VaccineLabel,
  AssessmentText,
  VaccineResultsContainer,
} from '../../components/style/mini-card.component';
import { CardContainer } from '../../components/style/result-card.component';
import {
  MiniCardContainer,
  MiniResultCard,
  MiniResultCard2,
  WhiteResultCard,
} from '../../components/style/mini-card.component';
import { GraphContext } from '../../context/graph.context';

import { GraphComponent } from '../../components/graph.component';

export const ResultsScreen = ({ route }) => {
  // eslint-disable-next-line react/prop-types

  const { age, sex, area, country } = route.params;
  // const { location, setLocation } = useState();
  const { location, retrieveCountry, countryInfo, retrieveLocation } = useContext(LocationContext);
  const { graphInfo, vaccineInfo, retrieveGraphInfo, retrieveVaccineInfo } =
    useContext(GraphContext);
  const results = vaccineComputation(age, sex, area);
  useEffect(() => {
    retrieveCountry();
    retrieveGraphInfo();
    retrieveVaccineInfo();
    retrieveLocation();
    console.log('vaccineInfo', vaccineInfo, graphInfo);

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
              {item.color == 2 && (
                <MiniResultCard2>
                  <VaccineNumber>{item.vaccine} </VaccineNumber>
                  <VaccineLabel>Vaccine </VaccineLabel>
                  {item.case.map((each) => (
                    <VaccineResultsContainer key={each.id}>
                      {each.risk ? (
                        <VaccineNumber>{each.risk} </VaccineNumber>
                      ) : (
                        <VaccineNumber>No increased risk </VaccineNumber>
                      )}
                      <VaccineLabel>{each.se} </VaccineLabel>
                    </VaccineResultsContainer>
                  ))}
                </MiniResultCard2>
              )}

              {item.color == 3 && (
                <MiniResultCard>
                  <VaccineNumber>{item.vaccine} </VaccineNumber>
                  <VaccineLabel>Vaccine </VaccineLabel>
                  {item.case.map((each) => (
                    <VaccineResultsContainer key={each.id}>
                      {each.risk ? (
                        <VaccineNumber>{each.risk} </VaccineNumber>
                      ) : (
                        <VaccineNumber>No increased risk </VaccineNumber>
                      )}
                      <VaccineLabel>{each.se} </VaccineLabel>
                    </VaccineResultsContainer>
                  ))}
                </MiniResultCard>
              )}
            </MiniCardContainer>
          ))}

          <Spacer position="top" size="large">
            <AssessmentText>Location Assessment</AssessmentText>
          </Spacer>
          <MiniCardContainer>
            {countryInfo.country == 'USA' && (
              <WhiteResultCard>
                <Number>{location.active} </Number>
                <Label>Total Cases in {area} </Label>
              </WhiteResultCard>
            )}

            <WhiteResultCard>
              <Number>{countryInfo.active} </Number>
              <Label>Total Active Cases </Label>
            </WhiteResultCard>

            <WhiteResultCard>
              <Number>{countryInfo.cases} </Number>
              <Label>Total Recorded Cases </Label>
            </WhiteResultCard>
          </MiniCardContainer>
          {graphInfo && (
            <MiniCardContainer>
              <WhiteResultCard>
                <GraphComponent data={graphInfo}></GraphComponent>
                <Number>Cases in last 90 days in {countryInfo.country} </Number>
              </WhiteResultCard>
            </MiniCardContainer>
          )}
          {vaccineInfo && (
            <MiniCardContainer>
              <WhiteResultCard>
                <GraphComponent data={vaccineInfo}></GraphComponent>
                <Number>Vaccinations in last 90 days in {countryInfo.country} </Number>
              </WhiteResultCard>
            </MiniCardContainer>
          )}
        </ScrollView>
      </CardContainer>
    </SafeArea>
  );
};
