import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import ItemList from "../components/itemlist";

export default function Index() {
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
