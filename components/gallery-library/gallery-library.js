import React, { Component } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

import GalleryItem from "../gallery-library-item/gallery-library-item";

class GalleryLibrary extends Component {
  static navigationOptions = {
    title: "Gallery"
  };
  render() {
    const { navigate } = this.props.navigation;

    if(!true) return (
      <View style={styles.loadIndicator}>
        <ActivityIndicator size="large" color="#404040"/>
      </View>
    )

    return (
      <ScrollView>
        <View style={styles.container}>
          <GalleryItem onClickToImage={() => navigate("ImageItem")} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d9d9d9",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 5
  },
  loadIndicator:{
    justifyContent: 'center',
    height: '100%'
  }
});

export default GalleryLibrary;
