import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import RoomsList from "../components/RoomsContainer/RoomsList";
import Spacer from "../components/Spacer";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Keep Up</Text>
      <Button
        icon="plus"
        mode="contained"
        style={styles.addBtn}
        onPress={() => console.log("pressed")}
      >
        Add room
      </Button>

      <RoomsList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 34,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  addBtn: {
    marginTop: 20,
    width: 250,
  },
});
