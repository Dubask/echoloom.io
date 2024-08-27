import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, TextField, Button, Text } from "react-native-ui-lib";
import { AuthStackParamList } from "../../navigation/unAuthenticated/auth/auth-navigator";
import { firebaseAuth } from "../../services/firebase/config";

type RegisterScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "Register"
>;

export const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      await firebaseAuth.createUserWithEmailAndPassword(email, password);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <View flex padding-20 bg-white marginT-50>
      <Text text40BO marginB-30>
        Register
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
      <View marginB-20>
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
      <View marginB-30>
        <TextField
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
          floatingPlaceholder
          validate={["required"]}
          validationMessage={["Confirmation password is required"]}
          enableErrors
        />
      </View>
      <Button label="Register" onPress={handleRegister} bg-primary marginB-20 />
      <Button
        label="Back to Login"
        link
        onPress={() => navigation.navigate("Login")}
        color-primary
      />
    </View>
  );
};
