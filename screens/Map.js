import React, { useState, useEffect } from "react";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Alert, ActivityIndicator,Image } from "react-native";
import * as Location from "expo-location";
import Screen from "../components/Screen";


export default function Map() {
  const [location, setLocation] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        alert("Permission to access location was denied");
      }
      try {
        let {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({});
        setLocation({ latitude, longitude });
        setLat(latitude);
        setLon(longitude);
      } catch (error) {
        alert("Unfortunettly we couldnt find your location!")
      }
      
    })();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: 58.2832817,
            longitude: 12.2938717,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        >
          <Marker
            coordinate={{ latitude: lat ? lat : 0, longitude: lon ? lon : 0 }}
          >
            <Image
              source={require("../assets/circle.png")}
              style={styles.userPosition}
            />
          </Marker>
          <Marker
            coordinate={{
              latitude: 58.2847,
              longitude: 12.29,
            }}
          >
            <Image source={require("../assets/Logo.png")} style={styles.logo} />
          </Marker>
        </MapView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  logo: {
    width: 60,
    height: 60,
  },
  userPosition:{
    width:12,
    height:12,
  },
});
