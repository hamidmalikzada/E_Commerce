import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Category(props) {
    const navigation = useNavigation();
    return (
      <>
        <TouchableOpacity onPress={() => navigation.navigate("Men")}>
          <ImageBackground
            blurRadius={3}
            imageStyle={{ borderRadius: 15 }}
            source={require("../../assets/Men.jpg")}
            style={styles.img}
          >
            <View style={styles.container}>
              <Text style={styles.title}>Men</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Women")}>
          <ImageBackground
            blurRadius={5}
            imageStyle={{ borderRadius: 15 }}
            source={require("../../assets/Women.jpg")}
            style={styles.img}
          >
            <View style={styles.container}>
              <Text style={styles.title}>Women</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Jewelry")}>
          <ImageBackground
            blurRadius={5}
            imageStyle={{ borderRadius: 15 }}
            source={require("../../assets/Jewelries.jpg")}
            style={styles.img}
          >
            <View style={styles.container}>
              <Text style={styles.title}>Jewelry</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Electronic")}>
          <ImageBackground
            blurRadius={5}
            imageStyle={{ borderRadius: 15 }}
            source={require("../../assets/Electronic.jpg")}
            style={styles.img}
          >
            <View style={styles.container}>
              <Text style={styles.title}>Electronic</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
  img: {
    width: 190,
    height: 230,
    margin: 10,
  },
  title: {
    color: "white",
    fontSize: 25,
    backgroundColor: "#000000c0",
    fontWeight: "bold",
    paddingLeft:8,
    borderRadius:15,
  },
});

export default Category;