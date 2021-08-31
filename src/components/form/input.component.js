/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { SafeArea } from '../utility/safe-area.components';
import { LocationContext } from '../../context/results.context';
import {
  FormContainer,
  FormButton,
  FormCenter,
} from '../../components/style/styled-form.component';
import SelectDropdown from 'react-native-select-dropdown';
import NumericInput from 'react-native-numeric-input';
import { Spacer } from '../style/spacer.component';
import { Text } from 'react-native-paper';

export const InputComponent = ({ navigation }) => {
  const [sex, onChangeSex] = React.useState('');
  const [age, onChangeAge] = React.useState('');
  // const [area, onChangeLocation] = React.useState('');
  const { location, getArea, area } = useContext(LocationContext);

  const genderList = ['Male', 'Female'];
  const locationList = [
    'AK',
    'AL',
    'AR',
    'AS',
    'AZ',
    'CA',
    'CO',
    'CT',
    'DC',
    'DE',
    'FL',
    'GA',
    'GU',
    'HI',
    'IA',
    'ID',
    'IL',
    'IN',
    'KS',
    'KY',
    'LA',
    'MA',
    'MD',
    'ME',
    'MI',
    'MN',
    'MO',
    'MP',
    'MS',
    'MT',
    'NC',
    'ND',
    'NE',
    'NH',
    'NJ',
    'NM',
    'NV',
    'NY',
    'OH',
    'OK',
    'OR',
    'PA',
    'PR',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UM',
    'UT',
    'VA',
    'VI',
    'VT',
    'WA',
    'WI',
    'WV',
    'WY',
  ];
  return (
    <SafeArea>
      <FormContainer>
        <FormCenter>
          <Spacer position="top" size="large">
            <Text>Sex</Text>
          </Spacer>

          <Spacer position="top" size="medium">
            <SelectDropdown
              defaultValue={sex}
              data={genderList}
              mode={'outlined'}
              onSelect={(selectedItem, index) => {
                onChangeSex(selectedItem);
              }}
              sbuttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          </Spacer>
          <Spacer position="top" size="large">
            <Text>Location</Text>
          </Spacer>

          <Spacer position="top" size="medium">
            <SelectDropdown
              defaultValue={area}
              data={locationList}
              mode={'outlined'}
              onSelect={(selectedItem, index) => {
                getArea(selectedItem);
              }}
              sbuttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          </Spacer>
          <Spacer position="top" size="large">
            <Spacer position="bottom" size="medium">
              <Text>Age</Text>
            </Spacer>
            <NumericInput
              value={age}
              onChange={onChangeAge}
              onLimitReached={(isMax, msg) => console.log(isMax, msg)}
              totalWidth={365}
              totalHeight={50}
              iconSize={25}
              step={1}
              valueType="real"
              minValue={1}
              iconStyle={{ color: '#6C2BE3' }}
            />
          </Spacer>
        </FormCenter>

        <FormButton
          mode="contained"
          onPress={() => navigation.navigate('Results', { age: age, sex: sex, area: area })}>
          Next
        </FormButton>
      </FormContainer>
    </SafeArea>
  );
};
