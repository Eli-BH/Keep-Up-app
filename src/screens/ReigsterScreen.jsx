import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";
import React from "react";
// import { useDispatch, useSelector } from "react-redux";

const RegisterScreen = () => {
  // const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Spacer>
        <AuthForm
          header="Register to Keep up"
          error=""
          btnTitle="Register"
          onSubmit={(data) => console.log(data)}
          type="register"
        />
      </Spacer>

      <Spacer>
        <NavLink text="Already have an account? Sign in here!" route="Login" />
      </Spacer>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
