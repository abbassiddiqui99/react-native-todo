import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoItems from "./components/TodoItems";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import EditForm from "./components/EditForm";
import { Provider } from "react-redux";
import store from "./components/store";

// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// export default function App() {
//   return (
//     <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//   );
// }

const App = () => {
  // const [data, setData] = useState([
  //   {
  //     id: "bd7acbea",
  //     title: "First Item",
  //   },
  //   {
  //     id: "3ac68afc",
  //     title: "Second Item",
  //   },
  //   {
  //     id: "58694a0f",
  //     title: "Third Item",
  //   },
  //   {
  //     id: "bd7acbea1",
  //     title: "4th Item",
  //   },
  //   {
  //     id: "3ac68afc1",
  //     title: "5th Item",
  //   },
  //   {
  //     id: "58694a0f1",
  //     title: "6th Item",
  //   },
  // ]);
  // const onPressHandler = (id) => {
  //   setData((prevData) => prevData.filter((item) => item.id !== id));
  // };
  // const onSubmitHandler = (text) => {
  //   setData((prevData) => {
  //     setData([
  //       { id: new Date().getTime().toString(), title: text },
  //       ...prevData,
  //     ]);
  //   });
  // };

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Overview" }}
          />
          <Stack.Screen
            name="EditForm"
            component={EditForm}
            options={{ title: "EditForm" }}
          />
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

    // <View style={styles.container}>
    //   {/* Header Here */}
    //   <Header />
    //   <View style={styles.content}>
    //     {/* Form Here */}
    //     <Form onSubmitHandler={onSubmitHandler} />
    //     <View style={styles.item}>
    //       <FlatList
    //         data={data}
    //         renderItem={({ item }) => (
    //           <TodoItems
    //             item={item.title}
    //             id={item.id}
    //             onPressHandler={onPressHandler}
    //           />
    //         )}
    //         keyExtractor={(item) => item.id}
    //       />
    //     </View>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  // },
  // content: {
  //   padding: 40,
  // },
  // item: {
  //   marginTop: 20,
  // },
});

export default App;
