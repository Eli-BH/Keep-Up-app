import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import Spacer from "./Spacer";

const AuthForm = ({ header, error, btnTitle, onSubmit, type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

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

      {type === "register" ? (
        <>
          <Spacer />
          <TextInput
            label="Username"
            value={username}
            onChangeText={setUsername}
            autoCorrect={false}
            autoCapitalize="none"
            style={{ marginBottom: 15 }}
          />
        </>
      ) : null}
      {error ? (
        <View style={styles.errorView}>
          <Spacer>
            <Text style={styles.errorMessage}>{error}</Text>
          </Spacer>
        </View>
      ) : null}

      <Button raised onPress={() => onSubmit({ email, password, username })}>
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
