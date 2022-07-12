import React from "react";

import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin, authSelector } from "../redux/authSlice";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector(authSelector);

  console.log({ error, loading });

  return (
    <View style={styles.container}>
      <Spacer>
        <AuthForm
          header={"Sign in to Keep Up"}
          btnTitle="Login"
          onSubmit={(data) => dispatch(handleLogin(data))}
        />
      </Spacer>

      <NavLink text="Don't have an account? Sign up here!" route="Register" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default LoginScreen;
