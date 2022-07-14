import { View, StyleSheet } from "react-native";
import { Button, List, TextInput, TouchableRipple } from "react-native-paper";
import { createRoom } from "../redux/RoomSlice";

import React, { useState } from "react";
import Spacer from "../components/Spacer";
import { useDispatch, useSelector } from "react-redux";

const CreateRoomScreen = ({}) => {
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomPass, setRoomPass] = useState("");

  const dispatch = useDispatch();

  const handleCreateRoom = () => {
    dispatch(createRoom({ roomName, roomType, roomPass }));
  };

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
      <Button
        icon="plus"
        mode="contained"
        style={styles.addBtn}
        onPress={handleCreateRoom}
      >
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
