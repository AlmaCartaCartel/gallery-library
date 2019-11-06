import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableNativeFeedback
} from "react-native";

class GalleryItem extends Component {
  render() {
    const thmb =
      "https://images.unsplash.com/photo-1562887085-d0aa7ff20b95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ";

    const {
      name = "Name",
      author = "Author",
      thumbnail = thmb,
      onClickToImage
    } = this.props;

    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={onClickToImage}>
          <Image source={{ uri: thumbnail }} style={styles.image} />
        </TouchableNativeFeedback>

        <View>
          <Text style={styles.textName}>{name}</Text>
          <Text>Author: {author}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "98%",
    borderRadius: 4,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 5,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 20
    },
    elevation: 2
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#bfbfbf",
    marginRight: 20,
    marginLeft: 10
  },
  textName: {
    fontWeight: "bold",
    fontSize: 20
  }
});

export default GalleryItem;
