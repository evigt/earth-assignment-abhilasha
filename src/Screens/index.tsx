import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import CardBackgroundBg from "../../assets/card-bg.png";
import CardScreen from "../Components/CardScreen";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={CardBackgroundBg}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <CardScreen />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
