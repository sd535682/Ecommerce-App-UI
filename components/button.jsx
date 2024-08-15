import { Pressable, StyleSheet } from "react-native";
import { Bold } from "../constants/constant";

export default function ButtonComponent({props}) {
  return (
    <Pressable style={styles.button} onPress={props}>
      <Bold>Add to Cart</Bold>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
});
