import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import { navigationRef } from "./RootNavigation";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { Provider, useDispatch, useSelector } from "react-redux";
import {
  authSelector,
  tryLocalLogin,
  handleReset,
  logOut,
} from "./src/redux/authSlice";
import store from "./src/redux/store";
//Screens
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CreateRoomScreen from "./src/screens/CreateRoomScreen";
import RoomScreen from "./src/screens/RoomScreen";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(authSelector);

  useEffect(() => {
    dispatch(tryLocalLogin());

    return () => {
      dispatch(handleReset());
    };
  }, []);

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  const HomeScreenItem = () => {
    return (
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: true }}>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Create"
            component={CreateRoomScreen}
            options={{ title: "Create Room", headerShadowVisible: true }}
          />
          <Stack.Screen
            name="Room"
            component={RoomScreen}
            options={{ headerShown: true }}
          />
        </Stack.Group>
      </Stack.Navigator>
    );
  };

  const LogoutItem = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={() => dispatch(logOut())} />
      </DrawerContentScrollView>
    );
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        {token ? (
          <Drawer.Navigator
            drawerContent={(props) => <LogoutItem {...props} />}
            useLegacyImplementation
          >
            <Drawer.Screen
              name="Home"
              component={HomeScreenItem}
              screenOptions={{ headerShown: false }}
              options={{ headerShown: false }}
            />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Group>
          </Stack.Navigator>
        )}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
