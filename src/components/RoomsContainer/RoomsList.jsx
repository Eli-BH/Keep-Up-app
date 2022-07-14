import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";
import RoomItem from "./RoomItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const listFooter = () => <View style={{ height: 150 }}></View>;

const RoomsList = ({ roomData }) => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate("Room", {
      roomName: item.title,
    });
  };

  const RoomItemRender = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <RoomItem
        title={item.roomName}
        roomType={item.roomType}
        userCount={item.roomMembers.length}
      />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={roomData}
        keyExtractor={(item) => item._id}
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
