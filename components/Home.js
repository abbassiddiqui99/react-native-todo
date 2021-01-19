import React from "react";
import { FlatList, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import Header from "./Header";
import TodoItems from "./TodoItems";

const Home = ({ navigation, route }) => {
  const todoListData = useSelector((state) => state.todo.items);
  return (
    <View>
      <Header />
      <View style={{ padding: 40 }}>
        <Form />

        <FlatList
          data={todoListData}
          renderItem={({ item }) => (
            <TodoItems item={item.title} id={item.id} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Home;
