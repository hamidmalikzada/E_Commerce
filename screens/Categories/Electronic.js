import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import Card from "../../components/Card";
import Screen from "../../components/Screen";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Electronic(props) {
  const navigation = useNavigation();

  const [elecProducts, setElecProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then(function (response) {
        setElecProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Screen>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={25}
            onPress={() => navigation.goBack()}
          />{" "}
          Electronics</Text>
        <View style={styles.container}>
          {elecProducts.map((item) => {
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
      </ScrollView>
    </Screen>
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

export default Electronic;
