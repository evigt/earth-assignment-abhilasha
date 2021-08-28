import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import cryptoIcon from "../../../assets/crypto-Icon.png";
import { styles } from "./styles";

const NetworkCard = (props: { isLast?: boolean }) => {
  return (
    <View
      style={
        props.isLast ? styles.networkCardContainerNoBorder : styles.networkCardContainer
      }
    >
      <View style={styles.imageView}>
        <Avatar.Image size={32} source={cryptoIcon} />
        <View style={styles.cardLeftTextView}>
          <Text style={styles.cardTitleText}>Internet Computer</Text>
          <Text style={styles.cardAssetsText}>5 Assets</Text>
        </View>
      </View>
      <View>
        <Text style={styles.currencyText}>$39,092.22 USD</Text>
        <Text style={styles.currencyStats}>+0.34%</Text>
      </View>
    </View>
  );
};

export default NetworkCard;