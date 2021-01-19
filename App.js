import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoItems from "./components/TodoItems";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import EditForm from "./components/EditForm";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
// import store from "./store";

const App = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
