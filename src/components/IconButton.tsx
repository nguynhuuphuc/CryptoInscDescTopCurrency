import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {ICONS} from '../utils/Const';
import {style} from './Style';

type Props = {
  icon: ImageSourcePropType;
  name: string;
};

export default function IconButton({icon, name}: Props) {
  return (
    <View style={[style.cIconBtn]}>
      <Image source={icon} style={[style.icon24, style.btnIcon]} />
      <Text style={[style.btnText]}>{name}</Text>
    </View>
  );
}
