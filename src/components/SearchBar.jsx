import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [media, setMedia] = useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ]);

  const handleSubmit = () => {
    alert("search");
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        label="Search"
        onChangeText={setQuery}
        onSubmitEditing={handleSubmit}
      />
      <View>
        <FlatList
          data={media}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.title}</Text>
              </View>
            );
          }}
        />
      </View>
      <Text>{query}</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
