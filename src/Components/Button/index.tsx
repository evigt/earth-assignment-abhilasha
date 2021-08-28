import React from "react";
import { Button } from "react-native-paper";
import { styles } from "./styles";

const ButtonUI = () => {
  return (
    <Button
      mode="contained"
      onPress={() => console.log("Pressed")}
      style={styles.button}
      labelStyle={styles.buttonLable}
    >
      Earth Association
    </Button>
  );
};

export default ButtonUI;
