import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import EditForm from "./components/EditForm";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import Form from "./components/Form";

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
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditForm"
              component={EditForm}
              options={{ title: "Edit" }}
            />
            <Stack.Screen
              name="Form"
              component={Form}
              options={{ title: "Add Todo" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
