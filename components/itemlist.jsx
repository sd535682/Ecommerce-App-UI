import { FlatList, Text } from "react-native";
import ItemCard from "../components/itemcard";

export default function ItemList({ productData, handleModal }) {
  return (
    <FlatList
      data={productData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ItemCard item={item} handleModal = {handleModal}/>}
      initialNumToRender={10}
      style={{ paddingVertical: 10 }}
    />
  );
}
