import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";

class ImageScreen extends Component {
  static navigationOptions = {
    title: "Image"
  };
  render() {
    const { large_image } = this.props;

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
    flex: 1
  }
});
// Получене адреса выбраного изображения
const mapStateToProps = ({ large_image }) => {
  return {
    large_image
  };
};

export default connect(mapStateToProps)(ImageScreen);
