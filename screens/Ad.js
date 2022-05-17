import React from 'react';
import {
  StyleSheet,
  Image,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";


function Ad(props) {
    return (
        <Image style={styles.ad} source={require("../assets/Sale.jpg")} />
    );
}

const styles = StyleSheet.create({
  ad: {
    margin: 10,
    width: "95%",
    height: 200,
    borderRadius: 20,
  },
});

export default Ad;