/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { LocationContext } from '../../context/results.context';
import {
  FormContainer,
  FormButton,
  FormCenter,
  FormDropdown,
  InputFormCenter,
} from '../../components/style/styled-form.component';
import {SourceLabel} from '../../components/style/mini-card.component';
import SelectDropdown from 'react-native-select-dropdown';
import NumericInput from 'react-native-numeric-input';
import { Spacer } from '../style/spacer.component';
import { TouchableOpacity } from 'react-native';

import { Text } from 'react-native-paper';

export const InputComponent = ({ navigation }) => {
  const [sex, onChangeSex] = React.useState('');
  const [age, onChangeAge] = React.useState(1);
  // const [area, onChangeLocation] = React.useState('');
  const {
    countries,
    getArea,
    retrieveCountries,
    getCountry,
    setCountryISO,
    area,
    country,
    countryISO,
  } = useContext(LocationContext);

  const genderList = ['Male', 'Female'];
  const locationList = [
    'Alaska',
    'Alabama',
    'Arkansas',
    'American Samoa',
    'Arizona',
    'California',
    'Colorado',
    'Connecticut',
    'District of Columbia',
    'Delaware',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Iowa',
    'Idaho',
    'Illinois',
    'Indiana',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Massachusetts',
    'Maryland',
    'Maine',
    'Michigan',
    'Minnesota',
    'Missouri',
    'Mississippi',
    'Montana',
    'North Carolina',
    ' North Dakota',
    'Nebraska',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'Nevada',
    'New York',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Virginia',
    'Virgin Islands',
    'Vermont',
    'Washington',
    'Wisconsin',
    'West Virginia',
    'Wyoming',
  ];
  const countryList = countries.map((country) => country.country);
  const iso = countries.map((country) => country.countryInfo.iso3);

  return (
    <FormContainer>
      <FormCenter>
        <Spacer position="top" size="large">
          <Text>Sex</Text>
        </Spacer>

        <Spacer position="top" size="medium">
          <InputFormCenter>
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
          </InputFormCenter>
        </Spacer>

        <Spacer position="top" size="large">
          <Text>Country</Text>
        </Spacer>

        <Spacer position="top" size="medium">
          <InputFormCenter>
            <FormDropdown
              defaultValue={country}
              data={countryList}
              mode={'outlined'}
              dropdownStyle={'No'}
              onSelect={(selectedItem, index) => {
                getCountry(selectedItem);
                setCountryISO(iso[index]);
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
          </InputFormCenter>
        </Spacer>

        {country == 'USA' && (
          <Spacer position="top" size="large">
            <Text>State</Text>
          </Spacer>
        )}

        {country == 'USA' && (
          <Spacer position="top" size="medium">
            <InputFormCenter>
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
            </InputFormCenter>
          </Spacer>
        )}

        <Spacer position="top" size="large">
          <Spacer position="bottom" size="medium">
            <Text>Age</Text>
          </Spacer>
          <InputFormCenter>
            <NumericInput
              value={age}
              onChange={onChangeAge}
              onLimitReached={(isMax, msg) => console.log(isMax, msg)}
              totalWidth={300}
              totalHeight={50}
              iconSize={25}
              step={1}
              valueType="real"
              minValue={1}
              iconStyle={{ color: '#29A3FF' }}
            />
          </InputFormCenter>
        </Spacer>
        <TouchableOpacity onPress={() => navigation.navigate('Sources')}>
          <Spacer position="top" size="large">
          <SourceLabel>Sources</SourceLabel>
          </Spacer>
        </TouchableOpacity>
      </FormCenter>

      <FormButton
        mode="contained"
        disabled={!sex || !country}
        onPress={() => navigation.navigate('Results', { age: age, sex: sex, area: area })}>
        Next
      </FormButton>
    </FormContainer>
  );
};
