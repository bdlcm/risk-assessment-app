import React, { useState, useCallback } from 'react';
import { Button, View } from 'react-native';
import { Text } from 'react-native-paper';
import { ReanimatedArc } from '@callstack/reanimated-arc';
import styled from 'styled-components/native';

export const CircleContainer = styled.View`
  justify-content: center;
  text-align: center;
  position: relative;
  margin: 0 auto;
`;
export const CircleNumber = styled.View`
    left:24%;
    bottom:5%;
  position: absolute;
  margin: 0 auto;
`;

export const CircleNumberText = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};

  color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const CircleComponent = ({ arc }) => {
  //   const animate = useCallback(() => {
  //     setArc(Math.random() * 360);
  //   }, []);

  return (
    <CircleContainer>
      {/* <ReanimatedArc
        color="white"
        diameter={200}
        width={10}
        arcSweepAngle={arc}
        lineCap="round"
        rotation={arc}></ReanimatedArc> */}
      <CircleNumber>
        <CircleNumberText>{arc}</CircleNumberText>
      </CircleNumber>
    </CircleContainer>
  );
};
