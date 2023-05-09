import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { Main } from "./src/Main";
import { ComposeScreen } from "./src/ComposeScreen";

const Stack = createStackNavigator();

export default function App () {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={() => <Main />}
            options={{
              title: "Memo App"
            }}
          />
          <Stack.Screen
            name="Compose"
            component={ComposeScreen}
            options={{
              title: "Create"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
