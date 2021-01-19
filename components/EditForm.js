import React, { useState } from "react";
import { useEffect } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { readItem, updateItem } from "./actions/actions";

const EditForm = (props) => {
  const item = useSelector((state) => state.todo.item);
  const dispatch = useDispatch();
  // console.log(props.route.params.id);
  const [text, setText] = useState("");
  // console.log(item);
  useEffect(() => {
    if (item != null) {
      setText(item);
    }
    dispatch(readItem(props.route.params.id));
  }, [item]);
  // console.log("editform", props.route.params.dataValue[0].id);
  // console.log(props);
  // const { id, title } = props.route.params.dataValue[0];
  // // console.log(id);
  // // console.log(title);
  // const [text, setText] = useState(title);
  const onChangeHandler = (val) => {
    // console.log(text);
    setText({
      ...text,
      title: val,
    });
  };
  const editItemHandler = () => {
    dispatch(updateItem(text));
    props.navigation.navigate("Home");
  };
  return (
    <SafeAreaView>
      {text ? (
        <View>
          <TextInput
            value={text.title}
            onChangeText={(val) => {
              onChangeHandler(val);
            }}
          />
          <Button
            title="Edit todo"
            color="black"
            onPress={() => editItemHandler()}
          />
        </View>
      ) : null}

      {/* <View>{item ? (<View><Text>EditForm: {item.title}</Text><Text></Text></View>) : null}</View> */}
    </SafeAreaView>
    //   <View style={styles.container}>
    //     <TextInput
    //       placeholder="edit todo's"
    //       value={text}
    //       onChangeText={(val) => {
    //         onChangeHandler(val);
    //       }}
    //     />
    //     <Button
    //       title="edit Todo's"
    //       color="black"
    //       onPress={() => {
    //         // Pass params back to home screen
    //         props.navigation.navigate("Home", { text: text, id: id });
    //       }}
    //     />
    //   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});

export default EditForm;
