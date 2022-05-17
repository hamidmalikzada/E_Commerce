import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
} from "react-native";
import { LogBox } from "react-native";
import Screen from "../components/Screen";
import { CartContext } from "../components/CartContext";
import Card from "../components/Card";
import ProductCounter from "../components/ProductCounter";
import CartCard from "../components/CartCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppButton from "../components/AppButton";
import Toast from "react-native-toast-message";


function Cart(props) {
  const [refreshing, setRefreshing] = useState(false);
  const { Cart } = useContext(CartContext);
  const { setCart } = useContext(CartContext);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  function removeItemFromCart(item) {
    const exist = Cart.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCart(Cart.filter((x) => x.id !== item.id));
      Toast.show({
        type:"error",
        text1:"Item was deleted from your shopping cart"
      })

    } else {
      setCart(Cart.filter((x) => x.id !== item.id));
      Toast.show({
        type: "error",
        text1: "Item was deleted from your shopping cart",
      });
    }
  }
  const totalPrice = Cart.reduce((a,c) => a+c.price*c.qty,0)
  return (
    <Screen>
      <ScrollView>
        {Cart.length !== 0 ? (
          <View style={styles.container}>
            <Text style={styles.headerTxt}>Your shopping cart</Text>
            <View style={styles.counter}>
              <FlatList
                data={Cart}
                keyExtractor={Cart.id}
                renderItem={({ item }) => (
                  <CartCard
                    title={item.title}
                    subtitle={"$" + item.price}
                    image={item.image}
                    item={item}
                    rating={item.rating.rate}
                    qty={item.qty}
                    onPressRemove={() => removeItemFromCart(item)}
                  />
                )}
                ItemSeparatorComponent={() => <View style={styles.seperator} />}
                refreshing={refreshing}
                onRefresh={() => Cart}
              />
            </View>
            <View style={styles.totalPrice}>
              <Text style={styles.priceTxt}>Total Price </Text>
              <Text style={styles.priceTxt}>${totalPrice.toFixed(2)}</Text>
            </View>
            <AppButton
              title="Pay Now"
              iconName={"credit-card-check-outline"}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.txt}>
              <MaterialCommunityIcons
                name="shopping-outline"
                size={44}
                color="tomato"
              />
              Your shopping cart is empty.
            </Text>
          </View>
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  headerTxt: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 12,
    color: "tomato",
  },
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: "silver",
  },
  counter: {
    justifyContent: "space-between",
  },
  txt: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 200,
    color: "tomato",
    fontWeight: "bold",
  },
  totalPrice:{
    borderTopWidth:1,
    borderTopColor:"tomato",
    flexDirection:"row",
    justifyContent:"space-between",
    margin:10,
  },
  priceTxt:{
    fontWeight:"bold",
    fontSize:20,
    color:"tomato"
  },
});

export default Cart;
