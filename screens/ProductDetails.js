import React, { useState, useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ToastAndroid,
} from "react-native";
import AppButton from "../components/AppButton";
import Color from "../components/Color";
import Screen from "../components/Screen";
import Sizing from "../components/Sizing";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CartContext } from "../components/CartContext";
import CustomRatingBar from "../components/CustomRatingBar";
import Toast,{SuccessToast} from "react-native-toast-message";

function ProductDetails({ route }) {
  const productDetail = route.params;
  const navigation = useNavigation();
  const { setCart } = useContext(CartContext);
  const { Cart } = useContext(CartContext);
  const rating = productDetail.rating.rate;

  const onAddToCart = (productDetail) => {
    const exist = Cart.find((x) => x.id === productDetail.id);
    if (exist) {
      setCart(
        Cart.map((x) =>
          x.id === productDetail.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      Toast.show({
        type:"success",
        text1:"Item was added to your shopping cart"
      })
      //ToastAndroid.show("Item added to shopping cart", ToastAndroid.SHORT);
    } else {
      setCart([...Cart, { ...productDetail, qty: 1 }]);
      Toast.show({
        type:"success",
        text1:"Item was added to your shopping cart"
      })
      //ToastAndroid.show("Item added to shopping cart", ToastAndroid.SHORT);
    }
  };
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground
            style={styles.img}
            source={{ uri: productDetail.image }}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={25}
              onPress={() => navigation.goBack()}
              style={styles.backBtn}
            />
          </ImageBackground>
          <View style={styles.container}>
            <Text style={styles.title}>{productDetail.title}</Text>
            <View style={styles.priceSubtitle}>
              <Text style={styles.subtitle}>
                Category: {productDetail.category}
              </Text>
              <Text style={styles.price}>{"$" + productDetail.price}</Text>
            </View>
            <Text>Rating ({productDetail.rating.rate})</Text>
            <CustomRatingBar rating={rating} />
            <View style={styles.colorSize}>
              {productDetail.category.includes("clothing") ? (
                <Color />
              ) : (
                <View></View>
              )}
              {productDetail.category.includes("clothing") ? (
                <Sizing />
              ) : (
                <View></View>
              )}
            </View>
            <Text>{productDetail.description}</Text>
          </View>
          <AppButton
            title={"ADD TO CART"}
            iconName={"cart-plus"}
            onPress={() => onAddToCart(productDetail)}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    marginLeft: 10,
    marginTop: 5,
  },
  btn: {
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 45,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  btnTxt: {
    color: "white",
    marginLeft: 5,
  },
  container: {
    marginLeft: 6,
  },
  img: {
    width: "100%",
    height: 450,
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  subtitle: {
    color: "grey",
    fontSize: 15,
  },
  price: {
    textAlign: "right",
    marginRight: 20,
    fontSize: 30,
    color: "tomato",
  },
  priceSubtitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  colorSize: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ProductDetails;
