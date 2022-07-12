import React from "react";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";

import { useDispatch, useSelector } from "react-redux";
import { handleRegister, authSelector } from "../redux/authSlice";
import { View, StyleSheet } from "react-native";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector(authSelector);

  console.log({ error, loading });

  return (
    <View style={styles.container}>
      <Spacer>
        <AuthForm
          header="Register to Keep up"
          error=""
          btnTitle="Register"
          onSubmit={(data) => dispatch(handleRegister(data))}
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
