import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import constants from '../lib/constants';

interface BarProps {
  tabWidth: number;
  color: string;
}

const Bar = styled(Animated.View)`
  height: ${constants.indicatorHeight};
  width: ${(props: BarProps) => props.tabWidth * 0.2};
  position: absolute;
  bottom: 0;
  left: ${(props: BarProps) => props.tabWidth * 0.8 / 2};
  background-color: ${(props: BarProps) => props.color};
  border-radius: 1;
  elevation: 3;
  shadow-color: ${(props: BarProps) => props.color};
  shadow-opacity: 0.5;
  shadow-radius: 2;
  shadow-offset: { width: 0.5, height: 0.4 }
`;


interface IndicatorProps {
  color: string;
  tabWidth: number;
  value: Animated.Value;
}

const Indicator = (props: IndicatorProps) => (
  <Bar
    color={props.color}
    style={{ transform: [{ translateX: props.value }] }}
    tabWidth={props.tabWidth}
  />
);

export default Indicator;
