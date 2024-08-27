import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View } from "react-native-ui-lib";
import { UnAuthenticatedStackParamList } from "../../navigation/unAuthenticated/tabs/unauthenticated-tabs";
import { ImageGallery } from "./welcome-gallery/image-gallery/image-gallery";
import { VideoGallery } from "./welcome-gallery/video-gallery/video-gallery";
import { GALLERY_ASSETS } from "./welcome-gallery/const";
import { GalleryControllers } from "./welcome-gallery/gallery-controllers/gallery-controllers";

type NavigationProps = NativeStackScreenProps<
  UnAuthenticatedStackParamList,
  "Welcome"
>;

export const WelcomeScreen = ({ navigation }: NavigationProps) => {
  const [currnetGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const isLastItem = currnetGalleryIndex === GALLERY_ASSETS.length - 1;
  const isFirstItem = currnetGalleryIndex === 0;
  const currentGalleryItem = GALLERY_ASSETS[currnetGalleryIndex];
  const isVideo = currentGalleryItem.type === "video";
  const isImage = currentGalleryItem.type === "image";

  const onNext = () => {
    if (isLastItem) {
      navigation.navigate("Welcome");
    } else {
      setCurrentGalleryIndex(currnetGalleryIndex + 1);
    }
  };

  const handleBack = () => setCurrentGalleryIndex(currnetGalleryIndex - 1);

  return (
    <View flex>
      <GalleryControllers
        isLastItem={isLastItem}
        isFirstItem={isFirstItem}
        handleBack={handleBack}
      />
      <View flex>
        {isImage && (
          <ImageGallery
            buttonText={isLastItem ? "Let's Try" : "Next"}
            currentGalleryItem={currentGalleryItem.asset}
            onPress={onNext}
          />
        )}
        {isVideo && (
          <VideoGallery
            handleNext={onNext}
            currentGalleryItem={currentGalleryItem.asset}
          />
        )}
      </View>
    </View>
  );
};
