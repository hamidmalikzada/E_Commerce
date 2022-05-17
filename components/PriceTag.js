import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

function PriceTag(props) {
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={{ color: "white", fontSize: 18 }}>$ 6.99</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  welcome: {
    backgroundColor: "#009688",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 50,
    margin: 10,
  },
});

export default PriceTag;
