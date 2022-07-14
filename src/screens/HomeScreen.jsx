import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import RoomsList from "../components/RoomsContainer/RoomsList";
import { getRooms, roomsReset, roomsSelector } from "../redux/RoomSlice";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const [roomList, setRoomList] = useState([]);
  const { rooms, error, loading } = useSelector(roomsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());

    setRoomList(rooms);

    return () => {
      dispatch(roomsReset());
    };
  }, []);

  if (error) console.log(error);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Keep Up</Text>
      <Button
        icon="plus"
        mode="contained"
        style={styles.addBtn}
        onPress={() => navigation.navigate("Create")}
      >
        Add room
      </Button>

      {loading ? <Text>Loading</Text> : <RoomsList roomData={roomList} />}
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
