import styled from 'styled-components/native';
import { Button, TextInput, Switch } from 'react-native-paper';
import { colors } from '../../infrastructure/theme/colors';

export const FormContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  text-align: center;
`;

export const FormVeil = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const FormButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  margin-bottom: 5px;
  margin-top: 15px;
  color: blue;

`;
export const FormSwitch = styled(Switch)`
 `;


export const FormInput = styled(TextInput)`
  width: 100%;
`;
