import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

class ImageScreen extends Component {
  static navigationOptions = {
    title: "Image"
  };
  render() {
    const {
      large_image = "https://images.unsplash.com/photo-1562887085-d0aa7ff20b95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ"
    } = this.props;

    return (
      <View style={styles.container}>
        <Image source={{ uri: large_image }} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#262626",
    justifyContent: "center"
  },
  image: {
    height: 200
  }
});

export default ImageScreen;
