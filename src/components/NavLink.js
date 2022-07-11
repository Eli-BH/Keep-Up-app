import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Spacer from "./Spacer";

const NavLink = ({ text, route }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(route)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default NavLink;
