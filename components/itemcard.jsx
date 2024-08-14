import { View, StyleSheet, Image, Pressable } from "react-native";
import { Bold, Normal, Light } from '../constants/constant'
import { hp } from '../constants/responsive'

export default function ItemCard({ item }) {
  const { title, image, category, price, rating } = item;

  console.log(item);

  return (
    <Pressable style={styles.card_container}>
      <Image
        source={{
          uri: `${image}`,
        }}
        style={styles.card_image}
      />
      <View style={styles.details}>
        <Normal numberOfLines={2} >{title}</Normal>
        <Light style={styles.card_rating}>
          {rating.rate} {rating.count}
        </Light>
        <Bold style={styles.card_price}>Rs. {price.toFixed(2)}</Bold>
        <Light style={styles.card_category}>{category}</Light>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card_container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
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
});
