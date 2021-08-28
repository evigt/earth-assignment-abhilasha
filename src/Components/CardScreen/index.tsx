import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import ButtonUI from "../Button";
import { scaledValue } from "../../utils/design.utils";
import threeDotsIcon from "../../../assets/three-dots.png";
import plusCircleIcon from "../../../assets/plus-circle.png";
import NetworkCard from "../NetworkCard";

const Card = () => {
  return (
    <View style={styles.cardView}>
      <View style={styles.threeDotIcon}>
        <Image source={threeDotsIcon} style={styles.threeDotIcon} />
      </View>
      <View style={styles.cardContentView}>
        <ButtonUI />
        <Text style={styles.currency}>$209,092.22</Text>
        <Text style={styles.currencyStats}>+12.34%</Text>
      </View>
      <View style={styles.networkCardView}>
        <View style={styles.networkView}>
          <Text style={styles.networkText}>Networks</Text>
          <Image source={plusCircleIcon} style={styles.plusIcon} />
        </View>
        <NetworkCard />
        <NetworkCard />
        <NetworkCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: scaledValue(327),
    backgroundColor: "#3C5367",
    borderRadius: scaledValue(14),
    marginTop: scaledValue(205),
    marginHorizontal: scaledValue(26),
  },
  currency: {
    fontSize: scaledValue(32),
    color: "#fff",
    marginTop: scaledValue(15.86),
  },
  currencyStats: {
    marginTop: scaledValue(13),
    color: "#55D171",
  },
  cardContentView: {
    alignItems: "center",
  },
  networkCardView: {
    backgroundColor: "#282D3F",
    borderRadius: scaledValue(12),
    marginTop: scaledValue(20.14),
    paddingVertical: scaledValue(17)
  },
  threeDotIcon: {
    position: "absolute",
    left: scaledValue(284),
    top: scaledValue(27.36),
    width: scaledValue(19),
    height: scaledValue(3),
  },
  plusIcon: {
    width: scaledValue(20),
    height: scaledValue(20),
  },
  networkText: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: scaledValue(16),
  },
  networkView: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: scaledValue(10),
  },
});

export default Card;
