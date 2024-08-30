import fb from "@react-native-firebase/app";
import Constants from "expo-constants";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const firebaseConfig = Constants.expoConfig?.extra?.firebase;
console.log("firebaseConfig:", firebaseConfig);

if (!fb.apps.length) {
  fb.initializeApp(firebaseConfig);
  console.log("Firebase initialized successfully");
} else {
  fb.app();
  console.log("Firebase app already initialized.");
}

export const firebaseAuth = auth();
export const firebaseFirestore = firestore();
