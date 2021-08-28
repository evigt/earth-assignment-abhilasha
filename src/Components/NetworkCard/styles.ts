import { StyleSheet } from "react-native";
import { scaledValue } from "../../utils/design.utils";
export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: scaledValue(60),
    alignItems: "center",
    paddingHorizontal: scaledValue(10),
    borderBottomColor: "#40495c",
    borderBottomWidth: scaledValue(1)
  },
  cardTitleText: {
    color: "#FAFBFB",
    fontSize: scaledValue(14),
  },
  cardLeftTextView: { paddingLeft: scaledValue(8) },
  imageView: { flexDirection: "row" },
  cardAssetsText: {
    color: "#9BA0AA",
    fontSize: scaledValue(12),
    alignItems: 'center',
  },
  currencyText: {
    color: "#FAFBFB",
    fontSize: scaledValue(12),
  },
  currencyStats: {
    color: '#55D171',
    fontSize: scaledValue(12),
    textAlign: 'right',
  }
});
