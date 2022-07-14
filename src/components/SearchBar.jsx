import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMedia,
  searchSelector,
  getMediaReset,
} from "../redux/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [mediaArr, setMediaArr] = useState([
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

  const handleSearch = async (term) => {
    term.length > 0
      ? dispatch(fetchMedia("tv", term))
      : dispatch(getMediaReset());
  };

  const { media, error, loading } = useSelector(searchSelector);

  console.log(media);
  return (
    <View>
      <TextInput
        mode="outlined"
        label="Search"
        onChangeText={(term) => handleSearch(term)}
      />
      <View style={styles.container}>
        <FlatList
          data={media}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={styles.item}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`,
                    }}
                  />

                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    maxHeight: 150,
    backgroundColor: "#fff",
  },
  image: {
    width: 60,
    height: 90,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    borderColor: "#000",
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    backgroundColor: "#EEE",
  },
  itemText: {
    fontSize: 18,
    marginLeft: 10,
    flexWrap: "wrap",
    maxWidth: 320,
  },
});
