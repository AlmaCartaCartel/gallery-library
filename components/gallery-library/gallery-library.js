import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Text
} from "react-native";
import { connect } from "react-redux";

import GalleryItem from "../gallery-library-item/gallery-library-item";
import { fetchUnsplach, getUriSelectedPicture } from "../../redux/actions";

class GalleryLibrary extends Component {
  static navigationOptions = {
    title: "Gallery"
  };

  componentDidMount() {
    const { FetchUnsplash } = this.props;
    // Получение данных из сервера
    FetchUnsplash();
  }

  render() {
    const { navigation, gallery, loading, error, getPicture } = this.props;
    // Идет загрузка данных
    if (loading)
      return (
        <View style={styles.loadIndicator}>
          <ActivityIndicator size="large" color="#404040" />
        </View>
      );
    // В случае ошибки на сервере
    if (error)
      return (
        <View style={styles.error}>
          <Text style={styles.errorText}>Error</Text>
        </View>
      );

    return (
      <ScrollView>
        <View style={styles.container}>
          {gallery.map(item => {
            return (
              <GalleryItem
                key={item.id}
                onClickToImage={() => {
                  getPicture(item.large_image);
                  navigation.navigate("ImageItem");
                }}
                image={item}
              />
            );
          })}
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
  loadIndicator: {
    justifyContent: "center",
    height: "100%"
  },
  error: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  errorText: {
    fontSize: 37,
    fontWeight: "bold"
  }
});
// Отправка состояния компонента из redux в свойства
const mapStateToProps = ({ gallery, loading, error }) => {
  return {
    gallery,
    loading,
    error
  };
};
// Отправка action-creators в свойства
const mapDispatchToProps = dispatch => {
  return {
    FetchUnsplash: fetchUnsplach(dispatch),
    getPicture: uri => dispatch(getUriSelectedPicture(uri))
  };
};
// Подключение к redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryLibrary);
