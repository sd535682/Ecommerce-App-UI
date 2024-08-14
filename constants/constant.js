import { Text, StyleSheet } from "react-native";

// Base Text
export const BaseText = ({ style, children, ...props }) => (
  <Text style={[styles.baseText, style]} {...props}>{children}</Text>
);

// Bold Text
export const Bold = ({ style, ...props }) => (
  <BaseText style={[styles.bold, style]} {...props} />
);

// Normal Text
export const Normal = ({ style, ...props }) => (
  <BaseText style={[styles.normal, style]} {...props} />
);

// Light Text
export const Light = ({ style, ...props }) => (
  <BaseText style={[styles.light, style]} {...props} />
);

const styles = StyleSheet.create({
  bold: {
    fontSize: 20,
    fontWeight: "bold",
  },
  normal: {
    fontSize: 18,
  },
  light: {
    fontSize: 15,
    color: 'grey',
  },
});
