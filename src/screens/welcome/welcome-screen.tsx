import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import { View } from "react-native-ui-lib";
import { ImageGallery } from "./welcome-gallery/image-gallery/image-gallery";
import { VideoGallery } from "./welcome-gallery/video-gallery/video-gallery";
import { GALLERY_ASSETS } from "./welcome-gallery/const";
import { GalleryControllers } from "./welcome-gallery/gallery-controllers/gallery-controllers";
import { AuthStackParamList } from "../../navigation/unAuthenticated/auth/auth-navigator";
import { useFocusEffect } from "@react-navigation/native";
import { UnAuthenticatedStackParamList } from "../../navigation/unAuthenticated/tabs/unauthenticated-tabs";

type NavigationProps = NativeStackScreenProps<
  UnAuthenticatedStackParamList & AuthStackParamList,
  "Welcome"
>;

export const WelcomeScreen = ({ navigation }: NavigationProps) => {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const isLastItem = currentGalleryIndex === GALLERY_ASSETS.length - 1;
  const isFirstItem = currentGalleryIndex === 0;
  const { type, asset } = GALLERY_ASSETS[currentGalleryIndex];

  useFocusEffect(
    useCallback(() => {
      return () => {
        setCurrentGalleryIndex(0);
      };
    }, [])
  );

  const onNext = () => {
    if (isLastItem) {
      navigation.navigate("Register");
    } else {
      setCurrentGalleryIndex(currentGalleryIndex + 1);
    }
  };

  const handleBack = () => setCurrentGalleryIndex(currentGalleryIndex - 1);

  return (
    <View flex>
      <GalleryControllers
        isLastItem={isLastItem}
        isFirstItem={isFirstItem}
        handleBack={handleBack}
      />
      <View flex>
        {type === "image" && (
          <ImageGallery
            buttonText={isLastItem ? "Let's Try" : "Next"}
            currentGalleryItem={asset}
            onPress={onNext}
          />
        )}
        {type === "video" && (
          <VideoGallery handleNext={onNext} currentGalleryItem={asset} />
        )}
      </View>
    </View>
  );
};
