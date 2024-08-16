import { View, Image, StyleSheet } from "react-native";
import { Bold, Light } from "../constants/constant";
import ButtonComponent from "./button";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices";

export default function PopupDetails({ item, closeModal }) {
  const addToCart = useDispatch();

  const handleAddToCart = () => {
    addToCart(addItem({ productID: item.id, quantity: 1 }));
  };

  return (
    <View style={styles.modal_container}>
      <Image
        source={{ uri: item.image }}
        style={{ width: 150, height: 200 }}
        resizeMode="contain"
      />
      <View style={styles.item_container}>
        <Light>Description:</Light>
        <Light numberOfLines={6}>{item.description}</Light>
      </View>
      <Bold>Price : {item.price}</Bold>
      <View style={styles.button_container}>
        <ButtonComponent
          text={"Add to Cart"}
          color={"red"}
          textColor={"white"}
          props={handleAddToCart}
        />
        <ButtonComponent
          props={() => {
            closeModal();
          }}
          text={"Close"}
          color={"lightgrey"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal_container: {
    padding: 20,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
    backgroundColor: "white",
  },
  item_container: {
    flexDirection: "row",
    gap: 10,
  },
  button_container: {
    flexDirection: "row",
    gap: 10,
  },
});
