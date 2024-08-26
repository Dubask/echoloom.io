import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { HomeScreen } from "../../../screens/home/home-screen";
// import { SettingsScreen } from "../../../screens/settings/settings-screen";
import Icon from "react-native-vector-icons/FontAwesome";
// import { ProfileScreen } from "../../../screens/profile/profile-screen";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <></>
    {/* <HomeStack.Screen name="HomeScreen" component={HomeScreen} /> */}
  </HomeStack.Navigator>
);

const SettingsStackNavigator = () => (
  <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
    <></>
    {/* <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
    <SettingsStack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
  </SettingsStack.Navigator>
);

export const AuthenticatedTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
