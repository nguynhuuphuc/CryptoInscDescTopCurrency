import {View, Text, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../utils/Const';
import {style} from './Style';

export default function ItemCurrency() {
  return (
    <View style={[style.cItemCurrency]}>
      <View style={[style.cNameCoin]}>
        <Image source={ICONS.home} style={[style.icon24, style.coinIcon]} />
        <Text style={[style.coinName]}>Bitcoin</Text>
      </View>

      <View style={[style.cCoinPrice]}>
        <Text style={[style.coinPrice]}>$ 36,000.35</Text>
        <Text style={[style.coinPricePercent]}>2,30 %</Text>
      </View>
    </View>
  );
}
