import { View, StyleSheet, Image, Pressable } from "react-native";
import { Bold, Normal, Light } from "../constants/constant";
import { hp } from "../constants/responsive";
import { useRouter } from "expo-router";
import Counter from "./counter";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slices";

export default function ItemCard({ item }) {
  const itemCount = useSelector((state) => {
    const cartItem = state.cart.items.find(
      (cartItem) => cartItem.productID === item.id
    );
    return cartItem ? cartItem.quantity : 0;
  });
  const counter = useDispatch();
  const { id, title, image, category, price, rating, description } = item;
  const router = useRouter();

  console.log(itemCount);

  function handleIncrement () {
    counter(addItem({ productID: id, quantity: 1 }));
  };

  function handleDecrement() {
    counter(removeItem({ productID: id }));
  }

  return (
    <Pressable
      style={styles.card_container}
      onPress={() =>
        router.push({
          pathname: `modals/${item}`,
          params: {
            item: JSON.stringify(item),
          },
        })
      }
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
          <View>
            <Counter props={handleDecrement} />
            <Bold style={{ color: "black" }}>{itemCount}</Bold>
            <Counter props={handleIncrement} />
          </View>
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
});
