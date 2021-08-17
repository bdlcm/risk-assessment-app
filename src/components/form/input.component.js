/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { SafeArea } from '../utility/safe-area.components';
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
  const [showDropDown, setShowDropDown] = useState(false);

  const genderList = ['Male', 'Female'];
  return (
    <SafeArea>
      <FormContainer>
        <Spacer position="bottom" size="medium">
          <Text>Sex</Text>
        </Spacer>
        <SelectDropdown
          defaultValue={'Sex'}
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
        <Spacer position="top" size="large">
          <Spacer position="bottom" size="medium">
            <Text>Age</Text>
          </Spacer>
          <FormCenter>
            <NumericInput
              value={age}
              onChange={onChangeAge}
              onLimitReached={(isMax, msg) => console.log(isMax, msg)}
              totalWidth={240}
              totalHeight={50}
              iconSize={25}
              step={1}
              valueType="real"
              minValue={1}
              iconStyle={{ color: 'white' }}
              rightButtonBackgroundColor="#6C2BE3"
              leftButtonBackgroundColor="#6C2BE3"
            />
          </FormCenter>
        </Spacer>

        <FormButton onPress={() => navigation.navigate('Results', { age: age, sex: sex })}>
          Search
        </FormButton>
      </FormContainer>
    </SafeArea>
  );
};
