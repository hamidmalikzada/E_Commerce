import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


function AppButton({title, iconName, onPress}) {
      const navigation = useNavigation();
  return (
    <Pressable onPress={onPress}>
      <View style={styles.button}>
        <MaterialCommunityIcons name={iconName} size={20} color={"white"} />
        <Text style={styles.text}> {title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection:"row",
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 45,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  text: {
    color: "white",
    marginLeft: 5,
    fontSize:18,
  },
});

export default AppButton;
