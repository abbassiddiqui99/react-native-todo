import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const EditForm = (props) => {
  // console.log("editform", props.route.params.dataValue[0].id);
  // console.log(props);
  const { id, title } = props.route.params.dataValue[0];
  // console.log(id);
  // console.log(title);
  const [text, setText] = useState(title);
  const onChangeHandler = (val) => {
    // console.log(val);
    setText(val);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          placeholder="edit todo's"
          value={text}
          onChangeText={(val) => {
            onChangeHandler(val);
          }}
        />
        <Button
          title="edit Todo's"
          color="black"
          onPress={() => {
            // Pass params back to home screen
            props.navigation.navigate("Home", { text: text, id: id });
          }}
        />
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
