import React from "react";
import { Button } from "react-native-paper";
import { styles } from "./styles";

const ButtonUI = (props: { buttonLabel: string }) => {
  return (
    <Button
      mode="contained"
      onPress={() => console.log("Pressed")}
      style={styles.button}
      labelStyle={styles.buttonLabelStyle}
    >
      {props.buttonLabel}
    </Button>
  );
};

export default ButtonUI;
