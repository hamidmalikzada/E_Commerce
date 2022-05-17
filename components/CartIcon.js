import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CartContext } from "./CartContext";
import IconBadge from "react-native-icon-badge";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function CartIcon(props) {
  const { Cart } = useContext(CartContext);
  return (
    <View style={styles.container}>
      <IconBadge
        MainElement={
          <MaterialCommunityIcons
            name="cart-plus"
            size={25}
            color={props.color}
            style={styles.iconStyle}
          />
        }
        BadgeElement={<Text style={styles.txt}>{Cart.length}</Text>}
        IconBadgeStyle={{ width: 20, height: 20, backgroundColor: "tomato" }}
        Hidden={Cart.length == 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginTop: 13,
    marginRight:5,
    marginBottom:5,
    marginLeft:10,
  },
  txt: { color: "#FFFFFF" },
});

export default CartIcon;
