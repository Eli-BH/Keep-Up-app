import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import searchReducer from "./searchSlice";
import roomsReducer from "./RoomSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    rooms: roomsReducer,
  },
});
