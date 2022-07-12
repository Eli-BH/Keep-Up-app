import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import React from "react";

const RoomItem = ({ title, roomType, userCount }) => {
  return (
    <Card
      elevation={4}
      style={styles.container}
      onPress={() => console.log(`${title}: pressed`)}
    >
      <Card.Title title={title} />
      <Card.Content>
        <View style={styles.subText}>
          <Text style={styles.roomType}>Room type: {roomType}</Text>
          <Text>User Count: {userCount}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  itemHeader: {
    fontSize: 18,
    fontWeight: "500",
  },
  subText: {
    fontSize: 12,
    flexDirection: "row",
    marginTop: 5,
  },
  roomType: {
    marginRight: 15,
    width: 150,
  },
});

export default RoomItem;
