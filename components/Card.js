import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Card({ title, subtitle, image, onPress }) {
  // const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <ImageBackground style={styles.img} source={{ uri: image }}>
          <MaterialCommunityIcons
            name="heart-outline"
            color="red"
            size={25}
            style={styles.hrtIcon}
          />
        </ImageBackground>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 202,
  },
  hrtIcon: {
    alignSelf: "flex-end",
  },
  img: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    color: "black",
    fontSize: 18,
  },
  title: {
    fontWeight: "bold",
    color: "black",
  },
});

export default Card;
