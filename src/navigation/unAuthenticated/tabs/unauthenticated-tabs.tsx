import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthNavigator, AuthStackParamList } from "../auth/auth-navigator";
import { WelcomeScreen } from "../../../screens/welcome/welcome-screen";

const Tab = createBottomTabNavigator();

export type UnAuthenticatedStackParamList = {
  Welcome: undefined;
  Auth: { screen: keyof AuthStackParamList };
};

export const UnAuthenticatedTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Welcome"
        component={WelcomeScreen as any}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Auth"
        component={AuthNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
