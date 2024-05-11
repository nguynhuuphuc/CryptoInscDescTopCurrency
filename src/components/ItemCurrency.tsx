import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {COLORS, ICONS} from '../utils/Const';
import {style} from './Style';

type Props = {
  image: string;
  name: string;
  currency: number;
  percent: string;
};

export default function ItemCurrency({image, name, currency, percent}: Props) {
  return (
    <View style={[style.cItemCurrency]}>
      <View style={[style.cNameCoin]}>
        <Image
          source={image ? {uri: image} : ICONS.coin}
          style={[style.icon24, image ? style.coinImage : style.coinIcon]}
        />
        <Text style={[style.coinName]}>{name}</Text>
      </View>

      <View style={[style.cCoinPrice]}>
        <Text style={[style.coinPrice]}>$ {currency}</Text>

        <View style={[style.cCoinPercent]}>
          {}
          <Image
            source={ICONS.increase}
            style={[
              style.icon8,
              style.coinPercentIcon,
              percent.includes('-')
                ? [style.flip180Deg, {tintColor: COLORS.decrease}]
                : null,
            ]}
          />
          <Text
            style={[
              style.coinPricePercent,
              percent.includes('-') ? {color: COLORS.decrease} : null,
            ]}>
            {percent} %
          </Text>
        </View>
      </View>
    </View>
  );
}
