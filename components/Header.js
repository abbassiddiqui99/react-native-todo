import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Todo's List</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Form")}>
          <Text style={styles.plus}>
            <AntDesign name="pluscircleo" size={34} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 80,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 30,
    marginLeft: 15,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  plus: {
    color: "white",
    marginTop: 25,
    marginRight: 18,
  },
});

export default Header;
