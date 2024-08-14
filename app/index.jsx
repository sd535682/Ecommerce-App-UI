import { StyleSheet, Text, View } from "react-native";
// import { fetchAPI } from "../api/fakestore";
import { useEffect, useState } from "react";
import ItemList from "../components/itemlist";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  // const { top } = useSafeAreaInsets();
  // const paddingTop = top > 0 ? top + 10 : top + 20;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <View style={styles.home_container}>
      <ItemList productData={products} />
    </View>
  );
}

const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10
  },
});
