/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SafeArea } from '../../components/utility/safe-area.components';
import React, { useContext, useState, useEffect } from 'react';
import { Spacer } from '../../components/style/spacer.component';
import { Text, FlatList, ScrollView } from 'react-native';
import { vaccineComputation } from '../../services/vaccine.service';
import { LocationContext } from '../../context/results.context';
import { Tip } from 'react-native-tip';
import { Ionicons } from '@expo/vector-icons';

import { CardContainer } from '../../components/style/result-card.component';
import {
  MiniCardContainer,
  MiniResultCard,
  MiniResultCard2,
  WhiteResultCard,
  SmallWhiteResultCard,
  Number,
  SmallNumber,
  Label,
  VaccineNumber,
  VaccineLabel,
  AssessmentText,
  VaccineResultsContainer,
  WhiteNumber,
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
    <CardContainer>
      <ScrollView>
        <Spacer position="top" size="large">
          <AssessmentText>
            Vaccine Assessment{' '}
            <Tip
              title="Cards show the increased odds of acquiring side effects associated with each vaccine
            "
              body=" ">
              <Text
                style={{
                  padding: 0,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                <Ionicons name="information-circle-outline" size={24} color="black" />{' '}
              </Text>
            </Tip>
          </AssessmentText>
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
                      <WhiteNumber>{each.risk} </WhiteNumber>
                    ) : (
                      <WhiteNumber>No increased risk </WhiteNumber>
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
                      <WhiteNumber>{each.risk} </WhiteNumber>
                    ) : (
                      <WhiteNumber>No increased risk </WhiteNumber>
                    )}
                    <VaccineLabel>{each.se} </VaccineLabel>
                  </VaccineResultsContainer>
                ))}
              </MiniResultCard>
            )}
          </MiniCardContainer>
        ))}

        <Spacer position="top" size="large">
          <AssessmentText>
            Location Assessment{' '}
            <Tip
              title="Cards show the current number of cases (both current and total overall) in your current area, as well as the current vaccination numbers.
            "
              body=" ">
              <Text
                style={{
                  padding: 0,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                <Ionicons name="information-circle-outline" size={24} color="black" />{' '}
              </Text>
            </Tip>
          </AssessmentText>
        </Spacer>
        <MiniCardContainer>
          {countryInfo.country == 'USA' && (
            <>
              <SmallWhiteResultCard>
                <SmallNumber>{location.active} </SmallNumber>
                <Label>Total Cases in {area} </Label>
              </SmallWhiteResultCard>
              <SmallWhiteResultCard>
                <SmallNumber>{countryInfo.active} </SmallNumber>
                <Label>Total Active Cases </Label>
              </SmallWhiteResultCard>

              <SmallWhiteResultCard>
                <SmallNumber>{countryInfo.cases} </SmallNumber>
                <Label>Total Recorded Cases </Label>
              </SmallWhiteResultCard>
            </>
          )}

          {countryInfo.country != 'USA' && (
            <>
              <WhiteResultCard>
                <Number>{countryInfo.active} </Number>
                <Label>Total Active Cases </Label>
              </WhiteResultCard>

              <WhiteResultCard>
                <Number>{countryInfo.cases} </Number>
                <Label>Total Recorded Cases </Label>
              </WhiteResultCard>
            </>
          )}
        </MiniCardContainer>
        {graphInfo && (
          <MiniCardContainer>
            <WhiteResultCard>
              <GraphComponent data={graphInfo}></GraphComponent>
              <AssessmentText>Cases in last 90 days in {countryInfo.country} </AssessmentText>
            </WhiteResultCard>
          </MiniCardContainer>
        )}
        {vaccineInfo && (
          <MiniCardContainer>
            <WhiteResultCard>
              <GraphComponent data={vaccineInfo}></GraphComponent>
              <AssessmentText>
                Vaccinations in last 90 days in {countryInfo.country}{' '}
              </AssessmentText>
            </WhiteResultCard>
          </MiniCardContainer>
        )}
      </ScrollView>
    </CardContainer>
  );
};
