import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <ImageDetail
        title="Apple"
        imageSource={require("../../assets/apple.jpg")}
      />
      <ImageDetail
        title="Banana"
        imageSource={require("../../assets/banaana.jpg")}
      />
      <ImageDetail
        title="Peach"
        imageSource={require("../../assets/peach.jpg")}
      />
      <ImageDetail
        title="Watermelon"
        imageSource={require("../../assets/watermelon.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: "100%",
  },
});
export default ImageScreen;
