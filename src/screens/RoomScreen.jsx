import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";

const RoomScreen = ({ route }) => {
  const { roomName } = route.params;
  return (
    <View>
      <Text>{JSON.stringify(roomName)}</Text>
      <>
        <SearchBar />
      </>
    </View>
  );
};

export default RoomScreen;

const styles = StyleSheet.create({});
