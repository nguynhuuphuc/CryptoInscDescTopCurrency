import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {ICONS} from '../utils/Const';
import {style} from './Style';

type Props = {
  icon: ImageSourcePropType;
  label: string;
  focused: boolean;
  isCircle?: boolean;
};

export default function TabIcon({
  icon,
  label,
  focused,
  isCircle = false,
}: Props) {
  return (
    <View style={[style.cTab, isCircle ? style.tabCircle : null]}>
      <Image source={icon} style={[style.icon24, style.cTabIcon]} />
      <Text style={[style.cTabLabel]}>{label}</Text>
    </View>
  );
}
