import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../utils/Const';

export const style = StyleSheet.create({
  icon24: {
    width: 24,
    height: 24,
  },
  icon12: {
    width: 12,
    height: 12,
  },
  icon6: {
    width: 6,
    height: 6,
  },
  icon8: {
    width: 8,
    height: 8,
  },
  cTab: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  cTabIcon: {
    tintColor: COLORS.white,
  },
  cTabLabel: {
    color: COLORS.white,
    marginTop: 4,
    fontSize: 12,
  },
  tabCircle: {
    backgroundColor: COLORS.black,
    borderRadius: 60,
  },
  balanceWallet: {
    color: COLORS.textSecondary,
    fontSize: FONTSIZE.medium,
    fontWeight: '700',
  },
  cBalanceCurrency: {
    flexDirection: 'row',
  },
  _$: {
    color: COLORS.textSecondary,
    fontSize: FONTSIZE.large,
    fontWeight: '700',
    marginTop: 8,
  },
  balanceCurrency: {
    marginStart: 8,
    color: COLORS.textPrimary,
    fontWeight: '700',
    fontSize: FONTSIZE.xLarge,
  },
  cBalanceChange: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  balanceIcon: {
    tintColor: COLORS.textTertiary,
    marginEnd: 4,
  },
  balancePercent: {
    marginEnd: 24,
    color: COLORS.textTertiary,
  },
  balanceDay: {
    color: COLORS.textSecondary,
  },
  cIconBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.bgBtnColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  btnIcon: {
    marginEnd: 8,
  },
  btnText: {
    fontSize: FONTSIZE.medium,
    fontWeight: '700',
    color: COLORS.black,
  },
  //ItemCurrency
  cItemCurrency: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cNameCoin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinIcon: {
    tintColor: COLORS.textPrimary,
    marginEnd: 16,
  },
  coinName: {
    color: COLORS.textPrimary,
  },
  cCoinPrice: {
    alignItems: 'flex-end',
  },
  coinPrice: {
    color: COLORS.textPrimary,
    fontWeight: '700',
  },
  coinPricePercent: {
    color: COLORS.textTertiary,
  },
});
