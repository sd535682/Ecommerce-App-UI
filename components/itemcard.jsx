import { View, StyleSheet, Image, Pressable } from "react-native";
import { Bold, Normal, Light } from "../constants/constant";
import { hp } from "../constants/responsive";
import { useRouter } from "expo-router";
import Counter from "./counter";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slices";
import { useState, useEffect } from "react";

export default function ItemCard({ item, handleModal }) {
  const [showCounter, setShowCounter] = useState(false);
  const itemCount = useSelector((state) => {
    const cartItem = state.cart.items.find(
      (cartItem) => cartItem.productID === item.id
    );
    return cartItem ? cartItem.quantity : 0;
  });
  const counter = useDispatch();
  const { id, title, image, category, price, rating, description } = item;
  const router = useRouter();

  useEffect(() => {
    if (itemCount > 0) {
      setShowCounter(true);
    } else {
      setShowCounter(false);
    }
  }, [itemCount]);

  function handleIncrement() {
    counter(addItem({ productID: id, quantity: 1 }));
  }

  function handleDecrement() {
    if (itemCount === 1) {
      setShowCounter(false);
      counter(removeItem({ productID: id }));
    } else {
      counter(removeItem({ productID: id }));
    }
  }

  return (
    <Pressable
      style={styles.card_container}
      onPress={() => handleModal(item)}
    >
      <Image
        source={{
          uri: `${image}`,
        }}
        style={styles.card_image}
      />
      <View style={styles.details}>
        <Normal numberOfLines={2}>{title}</Normal>
        <Light style={styles.card_rating}>
          {rating.rate} {rating.count}
        </Light>
        <View style={styles.price_increment}>
          <Bold style={styles.card_price}>Rs. {price.toFixed(2)}</Bold>
          {showCounter && (
            <View style={styles.counter}>
              <Counter props={handleDecrement} symbol={"-"} />
              <Normal style={{ color: "black" }}>{itemCount}</Normal>
              <Counter props={handleIncrement} symbol={"+"} />
            </View>
          )}
        </View>
        <Light style={styles.card_category}>Category: {category}</Light>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card_container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 15,
    marginBottom: 10,
  },
  card_image: {
    resizeMode: "contain",
    height: hp(18),
    width: hp(15),
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  price_increment: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  counter: {
    backgroundColor: 'lightgray',
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  }
});
