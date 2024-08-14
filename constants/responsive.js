import { Dimensions } from "react-native";

// Responsive Width and Height
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

// Function to convert percentage
export const wp = (percentage) => {
  const width = deviceWidth;
  return (percentage * width) / 100;
};

export const hp = (percentage) => {
  const height = deviceHeight;
  return (percentage * height) / 100;
};