import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthenticatedTabs } from "./authenticated/tabs/authenticated-tabs";
import { useAuthStore } from "../stores/useStores";
import { UnAuthenticatedTabs } from "./unAuthenticated/tabs/unauthenticated-tabs";

const RootStack = createNativeStackNavigator();

export const RootNavigator = () => {
  const { userId } = useAuthStore();
  console.log("RootNavigator ~ userId:", userId);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {userId ? (
        <RootStack.Screen
          name="AuthenticatedTabs"
          component={AuthenticatedTabs}
        />
      ) : (
        <RootStack.Screen
          name="UnAuthenticatedTabs"
          component={UnAuthenticatedTabs}
        />
      )}
    </RootStack.Navigator>
  );
};
