import styled from 'styled-components/native';
import { Button, TextInput, Switch } from 'react-native-paper';

export const CardContainer = styled.View`
  background-color: white;
  padding: ${(props) => props.theme.space[2]};
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const ResultCard = styled.View`
  background-color: white;
  padding: ${(props) => props.theme.space[4]};
  text-align: center;
  border: 0.5px solid blue;
  margin: ${(props) => props.theme.space[3]};
  border-radius: 10px;
 


`;
