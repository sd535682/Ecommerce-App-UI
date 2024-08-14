import { FlatList, Text } from "react-native";
import ItemCard from "../components/itemcard";

export default function ItemList({ productData }) {
  return (
    <FlatList
      data={productData}
      renderItem={({item, index}) => <ItemCard item={item} key={index} />}
      initialNumToRender={10}
      style={{paddingVertical: 10}}
    />
  );
}
