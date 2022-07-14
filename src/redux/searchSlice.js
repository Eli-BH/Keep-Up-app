import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  media: [],
  error: false,
  loading: false,
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    getMedia: (state) => {
      state.loading = true;
    },
    getMediaFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    getMediaSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.media = [...payload];
    },
    getMediaReset: (state) => {
      state.loading = false;
      state.error = false;
      state.media = [];
    },
  },
});

export const { getMedia, getMediaFailure, getMediaSuccess, getMediaReset } =
  searchSlice.actions;

export default searchSlice.reducer;

export const searchSelector = (state) => state.search;

export function fetchMedia(mediaType, mediaQuery) {
  return async (dispatch) => {
    dispatch(getMedia());

    const token = await AsyncStorage.getItem("token");
    try {
      const { data } = await axios.post(
        `https://servered-keepup-server.herokuapp.com/api/admin/${mediaType}/tmdbSearch`,
        { query: mediaQuery },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      dispatch(getMediaSuccess(data.data.results));
    } catch (error) {
      console.log(error);
      dispatch(getMediaFailure());
    }
  };
}
