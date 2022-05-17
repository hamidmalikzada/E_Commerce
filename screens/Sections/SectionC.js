import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function SectionC(props) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(128, 191, 255,0.5)", "rgba(230, 204, 255,9)"]}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.background}
      />
      <View>
        <View style={styles.txt}>
          <Text style={styles.title}>Fashion</Text>
          <MaterialCommunityIcons
            name="arrow-right"
            size={30}
            color={"white"}
          />
        </View>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Image
          style={styles.img}
          source={require("../assets/test.jpg")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22bef2",
    width: "100%",
    height: 300,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  img: {
    width: 310,
    height: 220,
    alignSelf: "flex-end",
    marginTop: 20,
    marginLeft: 50,
  },
  imgContainer: {
    alignSelf: "flex-end",
  },
  title: {
    fontWeight: "bold",
    marginLeft: 5,
    fontSize: 25,
    color: "white",
  },
  subtitle: {
    marginLeft: 5,
    color: "white",
    fontSize: 14,
  },
  txt: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SectionC;
