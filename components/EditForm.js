import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const EditForm = (props) => {
  console.log(props.route.params.itemId);
  const [text, setText] = useState("");
  const onChangeHandler = (val) => {
    console.log(val);
    setText(val);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          placeholder="Add todo's"
          value={text}
          onChangeText={(val) => {
            onChangeHandler(val);
          }}
        />
        <Button title="Add Todo's" color="black" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});

export default EditForm;
