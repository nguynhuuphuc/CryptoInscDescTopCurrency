import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {style} from './Style';
import Balance from '../../components/Balance';
import IconButton from '../../components/IconButton';
import {LineChart} from 'react-native-wagmi-charts';
import {COLORS, ICONS} from '../../utils/Const';
import ItemCurrency from '../../components/ItemCurrency';

const data = [
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
  {
    timestamp: 1625946300000,
    value: 33545.25,
  },
  {
    timestamp: 1625947200000,
    value: 33510.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
];
const dataList = [1, 2, 3, 4, 5, 6, 7, 8];
const renderItem = () => {
  return <ItemCurrency />;
};

export default function Home() {
  return (
    <SafeAreaView style={[style.cHome]}>
      <View style={[style.cWallet]}>
        <Balance
          title="Your Wallet"
          dayChange="7d change"
          currency="45.000,34"
          percent="23,0"
        />
        <View style={[style.cIconButtons]}>
          <IconButton name="Transfer" icon={ICONS.transfer} />
          <IconButton name="Withdraw" icon={ICONS.withdraw} />
        </View>
      </View>

      <LineChart.Provider data={data}>
        <LineChart height={200} style={[style.cLineChart]}>
          <LineChart.Path color={COLORS.lineChart} />
          <LineChart.CursorCrosshair color={COLORS.lineChart}>
            <LineChart.Tooltip
              textStyle={{
                color: COLORS.textTertiary,
              }}
            />
          </LineChart.CursorCrosshair>
        </LineChart>
      </LineChart.Provider>

      <View style={[style.cTopCurrency]}>
        <Text style={[style.topCurrencyTitle]}>Top Cryptocurrency</Text>
        <FlatList
          data={dataList}
          renderItem={renderItem}
          style={[style.topCurrencyList]}
        />
      </View>
    </SafeAreaView>
  );
}
