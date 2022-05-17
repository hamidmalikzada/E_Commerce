import React, {useState} from 'react';
import { View, StyleSheet, Text,Pressable } from "react-native";


function Color(props) {
  const [selectedColor, setSelectedColor] = useState("")
    return (
      <View style={styles.container}>
        <Pressable
          onPress={() => setSelectedColor("red")}
          style={styles.circle}
        />
        <Pressable
          onPress={() => setSelectedColor("green")}
          style={[styles.circle, { backgroundColor: "green" }]}
        />
        <Pressable
          onPress={() => setSelectedColor("blue")}
          style={[styles.circle, { backgroundColor: "blue" }]}
        />
        <Pressable
          onPress={() => setSelectedColor("yellow")}
          style={[styles.circle, { backgroundColor: "yellow" }]}
        />
        <Pressable
          onPress={() => setSelectedColor("orange")}
          style={[styles.circle, { backgroundColor: "orange" }]}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
    },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: "red",
    marginRight:5,
  },
});

export default Color;