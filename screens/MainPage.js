import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import Category from "./Categories/Category";
import Ad from "./Ad";
//import NewCollection from "./NewCollection";
import NewCollection from "./Sections/NewCollection";
import SectionB from "./Sections/SectionB";
import SectionA from "./Sections/SectionA";
import Fashion from "./Sections/Fashion";
import Searchbar from "../components/Searchbar";
import Screen from "../components/Screen";
import Login from "./Login";

function MainPage(props) {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Searchbar />
        <Text style={styles.title}>Categories</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{ flexDirection: "row" }}
        >
          <Category />
        </ScrollView>
        <SectionA />
        <NewCollection />
        <SectionB />
        <Fashion />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 25,
    color: "#383b40",
    flexDirection: "column",
  },
});

export default MainPage;
