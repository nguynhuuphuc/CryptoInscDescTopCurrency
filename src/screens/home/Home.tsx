import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {style} from './Style';
import Balance from '../../components/Balance';
import IconButton from '../../components/IconButton';
import {LineChart} from 'react-native-wagmi-charts';
import {COLORS, ICONS} from '../../utils/Const';
import ItemCurrency from '../../components/ItemCurrency';
import {useGetMarketCoinQuery} from '../../api/GeckoApi';
import moment from 'moment';
import {Coin} from '../../api/DataType';

const renderItem = (item: Coin) => {
  const price = item.price_change_percentage_7d_in_currency
    ? item.price_change_percentage_7d_in_currency.toFixed(2)
    : '0';

  return (
    <ItemCurrency
      currency={item.current_price}
      name={item.name}
      percent={price}
      image={item.image}
    />
  );
};

export default function Home() {
  const {data, error, isLoading} = useGetMarketCoinQuery();
  const startDateUnix = moment().subtract(7, 'day').unix();
  const dataChart = data
    ? data[0].sparkline_in_7d.price.map((item, index) => {
        return {
          timestamp: startDateUnix + (index + 1) * 3600,
          value: item,
        };
      })
    : [{timestamp: 0, value: 0}];
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

      <LineChart.Provider data={dataChart}>
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
          contentContainerStyle={{marginBottom: 64}}
          data={data}
          renderItem={({item}) => renderItem(item)}
          style={[style.topCurrencyList]}
        />
      </View>
    </SafeAreaView>
  );
}
