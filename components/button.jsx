import { Pressable, StyleSheet } from "react-native";
import { Bold } from "../constants/constant";

export default function ButtonComponent({props, text, color, textColor}) {
  return (
    <Pressable style={[styles.button, {backgroundColor : color}]} onPress={props}>
      <Bold style={{color: textColor}}>{text}</Bold>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    padding: 10,
    borderRadius: 10,
  },
});
