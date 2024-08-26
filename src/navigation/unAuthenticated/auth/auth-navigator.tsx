import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { LoginScreen } from "../../../screens/login/login-screen";
// import { RegisterScreen } from "../../../screens/register/register-screen";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const FakeComponent = () => {
  return <></>;
};
export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name="Login" component={FakeComponent} />
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} /> */}
    </Stack.Navigator>
  );
};
