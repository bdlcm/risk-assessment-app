import styled from 'styled-components/native';
export const MiniCardContainer = styled.View`
  margin-top: 8;
  flex-direction: row;
  justify-content: space-between;
`;

export const VaccineLabel = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.regular};

  color: white;
`;

export const VaccineNumber = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};

  color: white;
`;

export const Label = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.regular};

  color: black;
`;

export const Number = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.heading};
  color: black;
  font-weight: ${(props) => props.theme.fontWeights.bold};

`;

export const AssessmentText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: black;
 
  margin: ${(props) => props.theme.space[2]};
`;

export const Circle = styled.View`
  border-radius: 500px;
  font-weight: ${(props) => props.theme.fontWeights.bold};

  color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const MiniResultCard = styled.View`
  padding: ${(props) => props.theme.space[4]};
  background-color: #C72B61;
  
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26);

  border-radius: 10px;
  color: white;
  flex: 1;

  margin: ${(props) => props.theme.space[2]};
`;
export const MiniResultCard2 = styled.View`
  padding: ${(props) => props.theme.space[4]};
  background-color: #CF8155
  ;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  color: white;
  flex: 1;

  margin: ${(props) => props.theme.space[2]};
`;

export const WhiteResultCard = styled.View`
  padding: ${(props) => props.theme.space[4]};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26);
  background-color: white;
  border-radius: 10px;
   color: white;
  flex: 1;

  margin: ${(props) => props.theme.space[2]};
`;

export const VaccineResultsContainer = styled.View`
  align-items: flex-end;
`;
