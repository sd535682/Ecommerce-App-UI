import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import ItemList from "../components/itemlist";
import PopupDetails from "../components/popupmodal";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data), setLoading(false);
      });
  }, []);

  const openModal = (item) => {
    setSelectedProduct(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.home_container}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <>
          <ItemList productData={products} handleModal={openModal} />
          <Modal
            transparent={true}
            visible={modalVisible}
            statusBarTranslucent
            animationType="fade"
          >
            <View style={styles.modal}>
              <PopupDetails
                item={selectedProduct}
                closeModal={() => setModalVisible(false)}
              />
            </View>
          </Modal>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 50,
  },
});
