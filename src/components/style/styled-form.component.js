/* eslint-disable no-unused-vars */
import styled from 'styled-components/native';
import { Button, TextInput, Switch } from 'react-native-paper';
import { colors } from '../../infrastructure/theme/colors';
import SelectDropdown from 'react-native-select-dropdown';


export const FormDropdown = styled(SelectDropdown).attrs({

  
})`
  text-align: center;
   `;

export const FormContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  width: 100%;
  height: 100%;
  display:flex;
`;

export const FormVeil = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.3);
`;

export const FormButton = styled(Button).attrs({})`
  background-color: #rgb(41, 137, 255);
  align-self: center;

  padding: ${(props) => props.theme.space[2]};
  margin-bottom: 5px;
  margin-top: 15px;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 10%;
 `;

export const AccountButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  margin-bottom: 5px;
`;

export const FormSwitch = styled(Switch)``;

export const FormInput = styled(TextInput)`
  width: 100%;
`;

 

export const FormCenter = styled.View`
  position: relative;
  display: flex;
 

 `;

 export const InputFormCenter = styled.View`
  margin:0 auto;
 

 `;
