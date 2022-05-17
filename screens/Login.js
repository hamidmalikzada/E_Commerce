import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  Button,
} from "react-native";
import ApptextInput from '../components/ApptextInput';
import AppButton from "../components/AppButton";
import {Formik} from "formik";
import * as Yup from "yup";
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function Login(props) {
    return (
      <Screen>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Image style={styles.logo} source={require("../assets/Logo.png")} />

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
            <>
              <ApptextInput
                icon="email"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                KeyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={()=> setFieldTouched("email")}
              />
              {touched.email && <Text style={styles.error}>{errors.email}</Text>}
              <ApptextInput
                icon="lock"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                KeyboardType="password"
                onChangeText={handleChange("password")}
              />
              {touched.password && <Text style={styles.error}>{errors.password}</Text>}
              <AppButton title="Login" onPress={handleSubmit} />
              <Text>Dont have an account, click here!</Text>
            </>
          )}
        </Formik>
        </ScrollView>
      </Screen>
    );
}

const styles = StyleSheet.create({
    container:{margin:10},
  error:{
      color:"red"
  },
  logo: {
    width: 150,
    height: 147,
    alignSelf: "center",
    marginTop:50,
    marginBottom:20
  },

});

export default Login;