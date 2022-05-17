import React, { useState, useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CartContext } from "../components/CartContext";
import { useNavigation } from "@react-navigation/native";
import ProductCounter from "./ProductCounter";
import CustomRatingBar from "./CustomRatingBar";

function CartCard({ title, subtitle, image, onPressRemove, onPress, item, rating, qty }) {
  // const navigation = useNavigation();
  const { Cart } = useContext(CartContext);
  const { setCart } = useContext(CartContext);

  return (
    <ScrollView>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.img} source={{ uri: image }} />
          <View style={styles.closeBtn}>
            <TouchableWithoutFeedback onPress={onPressRemove}>
              <MaterialCommunityIcons name="close" size={25} color="red" />
            </TouchableWithoutFeedback>
          </View>
          <Text numberOfLines={3} style={styles.title}>
            {title}
          </Text>
          <CustomRatingBar rating={rating} width={15} heigh={15} />
          <View style={styles.secondContainer}>
            <Pressable>
              <View style={styles.button}>
                <MaterialCommunityIcons name="plus" size={20} color={"white"} />
              </View>
            </Pressable>
            <Text style={styles.counter}>{qty}</Text>
            <Pressable>
              <View style={styles.button}>
                <MaterialCommunityIcons
                  name="minus"
                  size={20}
                  color={"white"}
                />
              </View>
            </Pressable>
          </View>
          <Text style={styles.subtitle}>{subtitle} </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 210,
    marginTop: 10,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  img: {
    width: 150,
    height: 200,
  },
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: 15,
    width: "57%",
    marginLeft: 10,
  },
  subtitle: {
    color: "black",
    fontSize: 20,
    marginLeft: 10,
  },
  closeBtn: {
    alignItems: "flex-end",
  },
  secondContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 5,
    alignSelf: "center",
  },
  counter: {
    margin: 5,
    fontSize: 20,
  },
});

export default CartCard;
