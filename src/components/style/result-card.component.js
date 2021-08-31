import styled from 'styled-components/native';
export const CardContainer = styled.View`
  background-color: white;
  padding: ${(props) => props.theme.space[2]};
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ResultCard = styled.View`
  padding: ${(props) => props.theme.space[4]};
  text-align: center;
  border: 0.5px solid #6c2be3;
  margin: ${(props) => props.theme.space[3]};
  border-radius: 10px;
`;
