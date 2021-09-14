/* eslint-disable no-unused-vars */
import styled from 'styled-components/native';
import { Button, TextInput, Switch } from 'react-native-paper';
import { colors } from '../../infrastructure/theme/colors';

export const FormContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  width: 100%;
  height: 100%;
`;

export const FormVeil = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.3);
`;

export const FormButton = styled(Button).attrs({})`
  background-color: #C72C62;
  
  padding: ${(props) => props.theme.space[2]};
  margin-bottom: 5px;
  margin-top: 15px;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 10%;
  left: 10%;
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

const x = -50;
const y = 0;

export const FormCenter = styled.View`
  position: relative;
`;
