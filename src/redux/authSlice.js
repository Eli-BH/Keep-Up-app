import { createSlice } from "@reduxjs/toolkit";

import * as RootNavigation from "../../RootNavigation";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  token: null,
  error: false,
  loading: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.token = payload;
    },
    register: (state) => {
      state.loading = true;
    },
    registerFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.token = payload;
    },
    logout: () => {
      state.loading = false;
      state.error = false;
      state.token = null;
    },
    authReset: (state) => {
      state.loading = false;
      state.error = false;
      state.token = null;
    },
  },
});

export const {
  login,
  loginFailure,
  loginSuccess,
  register,
  registerFailure,
  registerSuccess,
  authReset,
  logout,
} = authSlice.actions;

export const authSelector = (state) => state.auth;

export default authSlice.reducer;

export function handleRegister(userData) {
  return async (dispatch) => {
    dispatch(register());

    try {
      const { data } = await axios.post(
        "http://192.168.1.6:5000/api/auth/register",
        userData
      );

      await AsyncStorage.setItem("token", data);

      RootNavigation.navigate("Home");

      dispatch(registerSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(registerFailure());
    }
  };
}

export function handleLogin(userData) {
  return async (dispatch) => {
    dispatch(login());

    try {
      const { data } = await axios.post(
        "http://192.168.1.6:4000/api/auth/login",
        userData
      );
      await AsyncStorage.setItem("token", data);
      dispatch(loginSuccess(data));

      RootNavigation.navigate("Home");
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
}

export function tryLocalLogin() {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem("token");
    dispatch(login());

    if (token) {
      dispatch(loginSuccess(token));
      RootNavigation.navigate("Home");
    }
  };
}

export function handleReset() {
  return async (dispatch) => {
    dispatch(authReset());
  };
}

export function logOut() {
  return async (dispatch) => {
    await AsyncStorage.removeItem("token");

    dispatch(logout());
  };
}
