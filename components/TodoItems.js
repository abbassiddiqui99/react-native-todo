import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { deleteItem } from "./actions/actions";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const TodoItems = ({ item, id, navigation }) => {
  const dispatch = useDispatch();
  const onPressHandler = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View>
          <Text style={styles.item}>{item}</Text>
        </View>
        <View style={styles.testing}>
          <TouchableOpacity>
            <Text
              style={styles.edit}
              navigation={navigation}
              onPress={() => navigation.navigate("EditForm", { id: id })}
            >
              <FontAwesome5 name="edit" size={28} color="black" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressHandler(id)}>
            <Text style={styles.delete}>
              <MaterialCommunityIcons
                name="delete-forever"
                size={34}
                color="red"
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    margin: 2,
  },
  testing: {
    // flex: 1,
    flexDirection: "row",
    // justifyContent: "flex-end",
  },
  item: {
    padding: 8,
    margin: 7,
  },
  edit: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  delete: {
    paddingTop: 7,
    paddingBottom: 10,
    paddingRight: 10,
  },
});

export default TodoItems;
