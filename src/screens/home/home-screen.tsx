import React from "react";
import { View, Text, Button } from "react-native";
import { useAuthStore } from "../../stores/useStores";

export const HomeScreen = () => {
  const { setUserData, userId } = useAuthStore();
  console.log(userId);
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Log Out" onPress={() => setUserData({})} />
    </View>
  );
};
