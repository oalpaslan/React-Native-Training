import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

const ComponentAdjuster = (props) => {
  return (
    <View style={styles.sliderViewStyle}>
      <Text style={styles.textStyle}>{props.adjustment}</Text>
      <Slider
        value={props.value}
        minimumValue={props.minVal}
        maximumValue={props.maxVal}
        onValueChange={props.onChange}
        thumbTintColor="rgb(256,256,256)"
        minimumTrackTintColor="grey"
        maximumTrackTintColor="white"
      />
    </View>
  );
};

export default ComponentAdjuster;
const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 15,
  },
  sliderViewStyle: {
    width: "100%",
    padding: 15,
  },
  viewStyle: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "black",
  },
});
