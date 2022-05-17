import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable
} from "react-native";
import AppButton from './AppButton';
import { MaterialCommunityIcons } from "@expo/vector-icons";



function ProductCounter({ AddToCart, onRemove }) {
  return (
    <View></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 10,
  },
  btn: {
    width: 1,
  },
  txt: {
    fontSize: 25,
  },
  txtplus: {
    fontSize: 25,
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
  text: {
    color: "white",
    marginLeft: 5,
    fontSize: 18,
  },
  cntr:{
    margin:5,
    fontWeight:"bold",
    fontSize:20
  },
});

export default ProductCounter;