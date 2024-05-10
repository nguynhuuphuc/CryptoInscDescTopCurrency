import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Const';

export const style = StyleSheet.create({
  cHome: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  //Wallet
  cWallet: {
    backgroundColor: COLORS.secondary,
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 32,
    paddingBottom: 32,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  cIconButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: -20,
    left: 0,
    right: 0,
  },
  //LineChart
  cLineChart: {
    marginTop: 10,
  },
  //Top Cryptocurrency
  cTopCurrency: {
    marginStart: 8,
    marginEnd: 8,
    marginTop: 24,
  },
  topCurrencyTitle: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  topCurrencyList: {
    marginTop: 16,
  },
});
