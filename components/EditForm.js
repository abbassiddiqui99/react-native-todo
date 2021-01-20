import React, { useState } from "react";
import { useEffect } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { readItem, updateItem } from "./actions/actions";

const EditForm = (props) => {
  const item = useSelector((state) => state.todo.item);
  const dispatch = useDispatch();
  const [text, setText] = useState(null);
  useEffect(() => {
    if (item != null) {
      setText(item);
    }
    dispatch(readItem(props.route.params.id));
  }, [item]);
  const onChangeHandler = (val) => {
    setText({
      ...text,
      title: val,
    });
  };
  const editItemHandler = () => {
    dispatch(updateItem(text));
    setText(null);
    props.navigation.navigate("Home");
  };
  return (
    <SafeAreaView>
      {text ? (
        <View style={{ padding: 40 }}>
          <TextInput
            style={styles.input}
            value={text.title}
            onChangeText={(val) => {
              onChangeHandler(val);
            }}
          />
          <TouchableOpacity style={{ marginBottom: 10 }}>
            <Text
              style={styles.add}
              onPress={() => {
                if (text.title.length > 0) {
                  if (text.title !== item.title) {
                    Alert.alert("Update", "Press continue for update", [
                      {
                        text: "Cancel",
                      },
                      {
                        text: "Confirm",
                        onPress: () => editItemHandler(),
                      },
                    ]);
                  }
                  if (text.title === item.title) {
                    editItemHandler();
                  }
                } else {
                  Alert.alert("Alert", "Insert Something First!", [
                    {
                      text: "Cancel",
                    },
                  ]);
                }
              }}
            >
              Edit Todo's
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  add: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: 11,
    fontSize: 25,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "grey",
    height: 50,
    padding: 10,
    marginBottom: 3,
  },
});

export default EditForm;
