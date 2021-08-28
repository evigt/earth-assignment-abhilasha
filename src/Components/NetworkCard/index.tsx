import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import cryptoIcon from "../../../assets/crypto-Icon.png";
import { scaledValue } from "../../utils/design.utils";
import { styles } from "./styles";

const NetworkCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Avatar.Image size={32} source={cryptoIcon} />
        <View style={styles.cardLeftTextView}>
          <Text style={styles.cardText}>Internet Computer</Text>
          <Text style={styles.cardSubText}>5 Assets</Text>
        </View>
      </View>
      <View>
        <Text style={styles.currency}>$39,092.22 USD</Text>
        <Text style={styles.currencyStats}>+0.34%</Text>
      </View>
    </View>
  );
};

export default NetworkCard;