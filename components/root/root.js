import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import GalleryLibrary from "../gallery-library/gallery-library";
import ImageScreen from "../image-screen/image-screen";

// Подключение к react-navigation 
const MainNavigator = createStackNavigator(
  {
    Gallery: { screen: GalleryLibrary },
    ImageItem: { screen: ImageScreen }
  },
  {
    initialRouteName: "Gallery"
  }
);

const Root = createAppContainer(MainNavigator);

export default Root;
