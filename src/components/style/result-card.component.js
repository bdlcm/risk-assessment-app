import styled from 'styled-components/native';
export const CardContainer = styled.View`
  background-color: white;
  padding: ${(props) => props.theme.space[2]};
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ResultCardBackground = styled.View`
  background-color: white;
  padding: ${(props) => props.theme.space[1]};
  text-align: center;
  position: relative;
  margin-top: ${(props) => props.theme.space[3]};

  width: 80%;
 `;
export const CardBackground = styled.View`
  background-color: white;
  text-align: center;
  top: 0;
  left: 0;

  width: 100%;
  height: 10%;
`;



export const ResultCard = styled.View`
  padding: ${(props) => props.theme.space[1]};
  text-align: center;
  border: 0.5px solid #6c2be3;
  border-radius: 10px;
`;
export const ResultText = styled.Text`
  padding-left: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[2]};

  font-size: ${(props) => props.theme.fontSizes.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: black;
`;
 