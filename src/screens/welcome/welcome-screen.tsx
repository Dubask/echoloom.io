import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View } from "react-native-ui-lib";
import { UnAuthenticatedStackParamList } from "../../navigation/unAuthenticated/tabs/unauthenticated-tabs";
import { ImageGallery } from "./welcome-gallery/image-gallery";
import { VideoGallery } from "./welcome-gallery/video-gallery";

type WelcomeScreenProps = NativeStackScreenProps<
  UnAuthenticatedStackParamList,
  "Welcome"
>;

export const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate("Welcome");
    }
  };

  const images = [
    require("../../../assets/demo-img1.jpg"),
    require("../../../assets/demo-img2.jpg"),
  ];

  const handleSkip = () => {
    // go to register
    // navigation.navigate("HomeScreen");
  };

  return (
    <View flex bg-black>
      {currentIndex < images.length ? (
        <ImageGallery
          images={images}
          currentIndex={currentIndex}
          handleNext={handleNext}
        />
      ) : (
        <VideoGallery handleNext={handleNext} />
      )}
    </View>
  );
};
