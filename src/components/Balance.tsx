import React from 'react';
import {View, Text, Image} from 'react-native';
import {style} from './Style';
import {ICONS} from '../utils/Const';

type Props = {
  title: string;
  currency: string;
  percent: string;
  dayChange: string;
};

export default function Balance({title, currency, percent, dayChange}: Props) {
  return (
    <View>
      <Text style={[style.balanceWallet]}>{title}</Text>

      <View style={[style.cBalanceCurrency]}>
        <Text style={[style._$]}>$</Text>
        <Text style={[style.balanceCurrency]}>{currency}</Text>
        <Text style={[style._$]}>USD</Text>
      </View>

      <View style={[style.cBalanceChange]}>
        <Image
          source={ICONS.increase}
          style={[style.icon8, style.balanceIcon]}
        />
        <Text style={[style.balancePercent]}>{percent}%</Text>
        <Text style={[style.balanceDay]}>{dayChange}</Text>
      </View>
    </View>
  );
}
