import {StyleSheet} from 'react-native';
import {COLORS} from '../utils/Const';

export const style = StyleSheet.create({
  icon24: {
    width: 24,
    height: 24,
  },
  cTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cTabIcon: {
    tintColor: COLORS.white,
  },
  cTabLabel: {
    color: COLORS.white,
    marginTop: 4,
    fontSize: 12,
  },
});
