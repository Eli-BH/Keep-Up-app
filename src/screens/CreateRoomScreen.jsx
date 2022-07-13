import { View, StyleSheet } from "react-native";
import { Button, List, TextInput, TouchableRipple } from "react-native-paper";
import React, { useState } from "react";
import Spacer from "../components/Spacer";

const CreateRoomScreen = ({}) => {
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomPass, setRoomPass] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        label="Room Name"
        value={roomName}
        onChangeText={setRoomName}
        autoCorrect={false}
      />
      <Spacer />
      <TextInput
        label="Room Password"
        value={roomPass}
        onChangeText={setRoomPass}
        autoCorrect={false}
      />
      <Spacer />
      <List.Section>
        <List.Accordion title="Room Type">
          <TouchableRipple
            onPress={() => setRoomType("tv")}
            rippleColor="rgba(0, 0, 0, .32)"
          >
            <List.Item title="T.V." />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => setRoomType("movies")}
            rippleColor="rgba(0, 0, 0, .32)"
          >
            <List.Item title="Movies" />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => setRoomType("anime")}
            rippleColor="rgba(0, 0, 0, .32)"
          >
            <List.Item title="Anime" />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => setRoomType("manga")}
            rippleColor="rgba(0, 0, 0, .32)"
          >
            <List.Item title="Manga" />
          </TouchableRipple>
        </List.Accordion>
      </List.Section>

      <Spacer />
      <Button icon="plus" mode="contained" style={styles.addBtn}>
        Create
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default CreateRoomScreen;
