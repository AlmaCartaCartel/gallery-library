import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Provider } from "react-redux";

import store from "./redux/store";
import Root from "./components/root/root";

export default function App() {
  return (
    // предоставляет доступ к redux store
    <Provider store={store}>
      <View style={styles.container}>
        {/* Основной компонент */}
        <Root />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9"
  }
});
