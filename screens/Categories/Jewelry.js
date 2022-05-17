import React, { useState, useEffect, FlatList } from "react";
import axios from "axios";
import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";
import Card from "../../components/Card";
import Screen from "../../components/Screen";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Jewelry(props) {
  const navigation = useNavigation();

  const [jewleryProducts, setJewleryProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then(function (response) {
        setJewleryProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Screen>
        <Text style={styles.title}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={25}
            onPress={() => navigation.goBack()}
          />{" "}
          Jewelries
        </Text>
        <View style={styles.container}>
          {jewleryProducts.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title.slice(0, 11)}
                subtitle={"$" + item.price}
                image={item.image}
                onPress={() => navigation.navigate("ProductDetails", item)}
              />
            );
          })}
        </View>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  title: {
    marginLeft: 30,
    fontWeight: "bold",
    fontSize: 25,
    color: "#383b40",
    flexDirection: "column",
    marginBottom: 15,
  },
});

export default Jewelry;
