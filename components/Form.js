import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Form = ({ onSubmitHandler }) => {
  const [text, setText] = useState("");
  const onChangeHandler = (val) => {
    console.log(val);
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
        <Text style={styles.add} onPress={() => onSubmitHandler(text)}>
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
