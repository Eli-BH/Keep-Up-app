import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  rooms: [],
  error: false,
  loading: false,
};

const roomsSlice = createSlice({
  name: "roomSlice",
  initialState,
  reducers: {
    getRooms: (state) => {
      state.loading = true;
    },
    getRoomsFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    getRoomsSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.rooms = [...payload];
    },

    createRoom: (state) => {
      state.loading = true;
    },

    createRoomFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    createRoomSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.rooms = [...payload];
    },
    roomsReset: (state) => {
      state.loading = false;
      state.error = false;
      state.rooms = [];
    },
  },
});

export const {
  getRooms,
  getRoomsFailure,
  roomsReset,
  getRoomsSuccess,
  createRoom,
  createRoomFailure,
  createRoomSuccess,
} = roomsSlice.actions;

export default roomSlice.reducer;

export const roomsSelector = (state) => state.rooms;

export function fetchRooms() {
  return async (dispatch) => {
    dispatch(getRooms());

    const token = await AsyncStorage.getItem("token");

    try {
      const { data } = await axios.get(
        "https://servered-keepup-server.herokuapp.com/api/admin/getUsersRooms",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      dispatch(getRoomsSuccess(data.rooms));
    } catch (error) {
      console.log(error);
      dispatch(getRoomsFailure);
    }
  };
}

export function createRoom({ roomData }) {
  return async (dispatch) => {
    dispatch(createRoom());

    const token = await AsyncStorage.getItem("token");

    try {
      const { data } = await axios.post(
        "https://servered-keepup-server.herokuapp.com/api/admin/createRoom",
        roomData,
        {
          header: {
            Authorization: "Bearer " + token,
          },
        }
      );

      dispatch(createRoomSuccess(data.rooms));
    } catch (error) {
      console.log(error);
      dispatch(createRoomFailure());
    }
  };
}
