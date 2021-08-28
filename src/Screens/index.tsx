import React from "react";
import { View, ImageBackground, Image, Text, TouchableOpacity } from "react-native";
import CardBackgroundBg from "../../assets/card-bg.png";
import ButtonUI from "../Components/Button";
import threeDotsIcon from "../../assets/three-dots.png";
import plusCircleIcon from "../../assets/plus-circle.png";
import NetworkCard from "../Components/NetworkCard";
import { styles } from "./styles";
import { Avatar } from "react-native-paper";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={CardBackgroundBg}
        resizeMode="stretch"
        style={styles.backgroundImage}
      >
        <View style={styles.cardView}>
            <View style={styles.threeDotIconView}>
              <Image source={threeDotsIcon} style={styles.threeDotIcon} />
            </View>
          <View style={styles.cardContentView}>
            <ButtonUI buttonLabel="Earth Association" />
            <Text style={styles.currencyText}>$209,092.22</Text>
            <Text style={styles.currencyStats}>+12.34%</Text>
          </View>
          <View style={styles.networkCardView}>
            <View style={styles.networkTextView}>
              <Text style={styles.networkText}>Networks</Text>
              <Avatar.Image size={20} source={plusCircleIcon} style={styles.avatarPlusIcon} />
            </View>
            <NetworkCard />
            <NetworkCard />
            <NetworkCard isLast />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
