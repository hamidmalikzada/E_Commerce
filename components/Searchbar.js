import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ApptextInput from "./ApptextInput";

function Searchbar(props) {
  return <ApptextInput placeholder="Search" icon="magnify" />;
}

export default Searchbar;
