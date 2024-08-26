import React from "react";
import { View, Text, TouchableOpacity } from "react-native-ui-lib";

export const SettingsScreen = () => {
  return (
    <View flex padding-20 bg-white>
      <Text text40BO marginB-30>
        Settings
      </Text>
      <TouchableOpacity paddingV-15 marginB-10>
        <Text text70>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity paddingV-15 marginB-10>
        <Text text70>Terms of Service</Text>
      </TouchableOpacity>
      <TouchableOpacity paddingV-15 marginB-10>
        <Text text70>Account Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity paddingV-15 marginB-10>
        <Text text70>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
