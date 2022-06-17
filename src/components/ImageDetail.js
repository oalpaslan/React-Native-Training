import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image style={styles.imgStyle} source={props.imageSource} />
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: 200,
    height: 200,
  },
});
export default ImageDetail;
