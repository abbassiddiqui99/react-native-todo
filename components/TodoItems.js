import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { deleteItem } from "./actions/actions";

const TodoItems = ({ item, id, navigation }) => {
  const dispatch = useDispatch();
  const onPressHandler = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.item}>{item}</Text>
        {/* <Button title="Delete" /> */}
        <View style={styles.testing}>
          <TouchableOpacity>
            <Text
              style={styles.edit}
              navigation={navigation}
              onPress={() => navigation.navigate("EditForm", { id: id })}
            >
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressHandler(id)}>
            <Text style={styles.delete}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    margin: 2,
  },
  testing: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  item: {
    padding: 8,
    margin: 7,
  },
  edit: {
    padding: 15,
    // borderTopRightRadius: 10,
    // borderBottomRightRadius: 10,
    color: "white",
    backgroundColor: "black",
  },
  delete: {
    padding: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    color: "white",
    backgroundColor: "red",
  },
});

export default TodoItems;
