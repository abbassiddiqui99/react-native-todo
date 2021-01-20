import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { addItemToList } from "./actions/actions";
import FadeInView from "./animation/animation";

const Form = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const onChangeHandler = (val) => {
    setText(val);
  };
  return (
    <View
      style={{
        backgroundColor: "#ededed",
        paddingVertical: 8,
        paddingHorizontal: 30,
        // borderBottomEndRadius: 10,
      }}
    >
      <TextInput
        style={styles.input}
        placeholder="Add todo's"
        value={text}
        onChangeText={(val) => {
          onChangeHandler(val);
        }}
      />
      <TouchableOpacity style={{ marginBottom: 10 }}>
        <Text
          style={styles.add}
          onPress={() => {
            if (text.length > 0) {
              dispatch(
                addItemToList({
                  id: new Date().getTime().toString(),
                  title: text,
                })
              );
              setText("");
            } else {
              Alert.alert("Alert", "Input is empty", [
                {
                  text: "Cancel",
                  // onPress: () => console.log("Ask me later pressed"),
                },
              ]);
            }
          }}
        >
          Add Todo's
        </Text>
      </TouchableOpacity>
    </View>
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

export default Form;
