import fb from "@react-native-firebase/app";
import Constants from "expo-constants";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const firebaseConfig = Constants.expoConfig?.extra?.firebase;

if (!fb.apps.length) {
  fb.initializeApp(firebaseConfig);
  console.log("Firebase initialized successfully");
} else {
  console.log("Firebase app already initialized.");
}

export const firebaseAuth = auth();
export const firebaseFirestore = firestore();
