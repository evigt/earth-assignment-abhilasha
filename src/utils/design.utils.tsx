import { Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
export const scaleFactor = windowWidth / 376;
export const scaledValue = (value = 0) => value * scaleFactor;