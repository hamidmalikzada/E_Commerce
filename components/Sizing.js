import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Sizing(props) {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.txt}>S</Text>
      </View>
      <View style={styles.square}>
        <Text style={styles.txt}>M</Text>
      </View>
      <View style={styles.square}>
        <Text style={styles.txt}>XL</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  square: {
    width: 25,
    height: 25,
    backgroundColor: "silver",
    marginRight: 5,
  },
  txt:{
      justifyContent:"center",
      alignContent:"center",
      textAlign:"center",
      fontWeight:"bold",
      paddingTop:3,
      color:"white"
  }
});

export default Sizing;
