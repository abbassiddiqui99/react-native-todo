import React, { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { addItemToList } from "./actions/actions";

const Form = ({ onSubmitHandler }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const onChangeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="Add todo's"
        value={text}
        onChangeText={(val) => {
          onChangeHandler(val);
        }}
      />
      {/* <Button
        
        title="Add Todo's"
        color="black"
      /> */}
      <TouchableOpacity>
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
              Alert.alert("Alert Title", "My Alert Msg", [
                {
                  text: "Ask me later",
                  onPress: () => console.log("Ask me later pressed"),
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
    // flex:
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    // justifyContent: "center",
    padding: 11,
    fontSize: 25,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
});

export default Form;
