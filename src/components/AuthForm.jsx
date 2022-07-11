import { StyleSheet, Text, View } from "react-native-web";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import Spacer from "./Spacer";

const AuthForm = ({ header, error, btnTitle, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <>
      <Spacer>
        <Text>{header}</Text>
      </Spacer>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />
      <Spacer />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
      />
      {error ? (
        <View style={styles.errorView}>
          <Spacer>
            <Text styles={styles.errorMessage}>{error}</Text>
          </Spacer>
        </View>
      ) : null}
      <Button raised onPress={() => onSubmit({ email, password })}>
        {btnTitle}
      </Button>
    </>
  );
};
export default AuthForm;

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    marginLeft: 15,
    fontWeight: "bold",
  },
  errorView: {
    backgroundColor: "#faa",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 5,
  },
});
