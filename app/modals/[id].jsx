import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Image, StyleSheet } from "react-native";
import { Light } from "../../constants/constant";
import ButtonComponent from "../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices"

export default function PopupDetails() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const details = JSON.parse(params.item);

  function goBack(){
    goback = router.back();
  }

  return (
    <View style={styles.modal_page}>
      <View style={styles.modal_container}>
        <Image
          source={{ uri: details.image }}
          style={{ width: 150, height: 200 }}
        />
        <View style={styles.item_container}>
          <Light>Description:</Light>
          <Light numberOfLines={6}>{details.description}</Light>
        </View>
        <View style={styles.button_container}>
            <ButtonComponent props={() => goBack()}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal_page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  modal_container: {
    borderColor: "black",
    borderWidth: 2,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
    backgroundColor: "white",
  },
  item_container: {
    flexDirection: "row",
    gap: 10
  },
  button_container: {
    flexDirection: "row",
    gap: 10
  }
});
