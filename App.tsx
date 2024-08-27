import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/navigation/root-navigator";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  firebaseAuth,
  firebaseFirestore,
} from "./src/services/firebase/config";

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
