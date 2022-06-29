import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imgStyle} source={props.imageSource} />
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 15,
  },
  textStyle: {
    color: "white",
  },
});
export default ImageDetail;
