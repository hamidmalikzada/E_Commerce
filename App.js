import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./screens/MainPage";
import NewCollection from "./screens/Sections/NewCollection";
import Category from "./screens/Categories/Category";
import Map from "./screens/Map";
import Men from "./screens/Categories/Men";
import Cart from "./screens/Cart";
import ProductDetails from "./screens/ProductDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CartContext } from "./components/CartContext";
import CartIcon from "./components/CartIcon";
import Women from "./screens/Categories/Women";
import Login from "./screens/Login";
import Electronic from "./screens/Categories/Electronic";
import Jewelry from "./screens/Categories/Jewelry";
import Toast from "react-native-toast-message";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="MainPage" component={MainPage} />
    <Stack.Screen name="Men" component={Men} />
    <Stack.Screen name="Women" component={Women} />
    <Stack.Screen name="Electronic" component={Electronic} />
    <Stack.Screen name="Jewelry" component={Jewelry} />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      onAddToCart={onAddToCart}
    />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
    }}
  >
    <Tab.Screen
      name="Home"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={Cart}
      onAddToCart={onAddToCart}
      onRemove={onRemove}
      options={{
        tabBarIcon: ({ size, color }) => <CartIcon color={color} />,
      }}
    />
    <Tab.Screen
      name="Map"
      component={Map}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="map-check-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Login}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const onAddToCart = (product) => {
  const exist = Cart.find((x) => x.id === product.id);
  if (exist) {
    setCart(
      Cart.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
    );
    console.log(Cart.qty);
  } else {
    setCart([...Cart, { ...product, qty: 1 }]);
  }
};

const onRemove = (product) => {
  const exist = Cart.find((x) => x.id === product.id);
  if (exist.qty === 1) {
    setCart(Cart.filter((x) => x.id !== product.id));
  } else {
    setCart(
      Cart.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  }
};

export default function App() {
  const [Cart, setCart] = useState([]);
  return (
    <>
      <CartContext.Provider value={{ Cart, setCart }}>
        <NavigationContainer theme={MyTheme}>
          <TabNavigator />
        </NavigationContainer>
        <Toast />
      </CartContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
