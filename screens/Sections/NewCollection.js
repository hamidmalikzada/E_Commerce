import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
} from "react-native";
//import Card from "./Card";
import Card from "../../components/Card";
import Screen from "../../components/Screen";
import { useNavigation } from "@react-navigation/native";

function NewCollection(props) {
  const navigation = useNavigation();
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=6")
      .then(function (response) {
        setTrendingProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Screen>
        <View style={styles.container}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={trendingProducts}
            keyExtractor={(product) => product.id}
            renderItem={({ item }) => (
              <Card
                style={styles.crdCom}
                title={item.title.slice(0, 11)}
                subtitle={"$" + item.price}
                image={item.image}
                onPress={() => navigation.navigate("ProductDetails", item)}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
            contentContainerStyle={{ marginLeft: 10, marginTop: 20 }}
            ListFooterComponent={<View style={{ width: 15, marginRight:15 }}></View>}
          />
        </View>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({ 
  crdCom:{
    paddingTop:100
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#94ba85",
    marginTop: -24,
  },
});

export default NewCollection;
