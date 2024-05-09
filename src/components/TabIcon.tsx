import React from 'react';
import {View, Text, Image} from 'react-native';
import {ICONS} from '../utils/Const';
import {style} from './Style';

type Props = {
  icon: any;
  label: string;
  focused: boolean;
};

export default function TabIcon({icon, label, focused}: Props) {
  return (
    <View style={[style.cTab]}>
      <Image source={icon} style={[style.icon24, style.cTabIcon]} />
      <Text style={[style.cTabLabel]}>{label}</Text>
    </View>
  );
}
