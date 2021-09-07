import styled from 'styled-components/native';
export const MiniCardContainer = styled.View`
  margin-top: 8;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
   font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.regular};

  color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const Number = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};

  color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const AssessmentText = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.heading};
 
  color: ${(props) => props.theme.colors.brand.primary};
  margin: ${(props) => props.theme.space[2]};

`;

export const Circle = styled.View`
  border-radius: 500px;
  font-weight: ${(props) => props.theme.fontWeights.bold};

  color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const MiniResultCard = styled.View`
  padding: ${(props) => props.theme.space[4]};
  background-color: #5754D7;
  border: 0.5px solid #5754D7;
  border-radius: 10px;
  color: white;
  flex: 1;

  margin: ${(props) => props.theme.space[1]};
`;
