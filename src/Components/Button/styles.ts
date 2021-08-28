import {StyleSheet} from "react-native";
import { scaledValue } from "../../utils/design.utils";
export const styles = StyleSheet.create({
    button: {
      width: scaledValue(159),
      borderRadius: scaledValue(25),
      backgroundColor: "#2496FF",
      marginTop: scaledValue(29),
    },
    buttonLable: {
      fontSize: scaledValue(13),
      textTransform: "capitalize",
      lineHeight: scaledValue(15),
    },
  });