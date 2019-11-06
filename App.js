import React from "react";
import { StyleSheet, View } from "react-native";

import UnsplashService from "./service/service";
import { UnsplashProvider } from "./components/unspalsh-context/unsplash-context";
import Root from "./components/root/root";

const unsplashService = new UnsplashService();

export default function App() {
  return (
    <View style={styles.container}>
      <UnsplashProvider value={unsplashService}>
        <Root />
      </UnsplashProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9"
  }
});
