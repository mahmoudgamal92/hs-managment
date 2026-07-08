import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

export const Text = ({ allowFontScaling = false, ...props }: TextProps) => (
  <RNText allowFontScaling={allowFontScaling} {...props} />
);
