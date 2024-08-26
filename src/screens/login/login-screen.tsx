import React, { useState } from "react";
import { View, Text, TextField, Button } from "react-native-ui-lib";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAuthStore } from "../../stores/useStores";
// import { firebaseAuth } from "../../services/firebase/config";
import { AuthStackParamList } from "../../navigation/unAuthenticated/auth/auth-navigator";

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, "Login">;

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUserData } = useAuthStore();

  const handleLogin = async () => {
    try {
      // const res = await firebaseAuth.signInWithEmailAndPassword(
      //   email,
      //   password
      // );
      // const user = res.user;
      // if (user) {
      //   const token = await user.getIdToken();
      //   const userId = user.uid;
      //   const email = user.email;
      //   setUserData({ userId, token, email });
      // }
    } catch (error: any) {
      console.log(error);
      // setError(error.message);
    }
  };

  return (
    <View flex padding-20 bg-white>
      <Text text40BO marginB-30>
        Login
      </Text>
      <View marginB-20>
        <TextField
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          floatingPlaceholder
          keyboardType="email-address"
          autoCapitalize="none"
          validate={["required", "email"]}
          validationMessage={["Email is required", "Email is invalid"]}
          enableErrors
        />
      </View>
      <View marginB-30>
        <TextField
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          floatingPlaceholder
          validate={["required"]}
          validationMessage={["Password is required"]}
          enableErrors
        />
      </View>
      <Button label="Login" onPress={handleLogin} bg-primary marginB-20 />
      <Button
        label="Register"
        link
        onPress={() => navigation.navigate("Register")}
        color-primary
      />
    </View>
  );
};
