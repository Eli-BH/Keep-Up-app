import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";
import RoomItem from "./RoomItem";
const rooms = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Card Item",
    roomType: "Movies",
    userCount: 4,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Card Item",
    roomType: "Movies",
    userCount: 1,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Card Item",
    roomType: "TV",
    userCount: 7,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145573241e29d72",
    title: "Fourth Card Item",
    roomType: "TV",
    userCount: 5,
  },
  {
    id: "58694a0f-3da1-471f-bd96-14534571e29d72",
    title: "Fifth Card Item",
    roomType: "TV",
    userCount: 4,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145351e29d72",
    title: "Sixth Card Item",
    roomType: "Movies",
    userCount: 9,
  },
  {
    id: "58694a0f-3da1-471f-bd96-14552571e29d72",
    title: "Seventh Item",
    roomType: "TV",
    userCount: 3,
  },
  {
    id: "58694a0f-3da1-471f-bd96-14534344571e29d72",
    title: "Eight Card Item",
    roomType: "Movies",
    userCount: 3,
  },
  {
    id: "58694a0f-3da1-471f-bd96-14514351e29d72",
    title: "Ninth Card Item",
    roomType: "Movies",
    userCount: 2,
  },
  {
    id: "58694a0f-3da1-471f-bd96-1455255571e29d72",
    title: "Tenth Item",
    roomType: "Movies",
    userCount: 4,
  },
];

const listFooter = () => <View style={{ height: 150 }}></View>;

const RoomsList = () => {
  const RoomItemRender = ({ item }) => (
    <RoomItem
      title={item.title}
      roomType={item.roomType}
      userCount={item.userCount}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        renderItem={RoomItemRender}
        ListFooterComponent={listFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,

    width: "100%",
  },

  spacer: {
    padding: 10,
    width: "100%",
  },
});

export default RoomsList;
