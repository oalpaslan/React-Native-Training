import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

const SquareScreen = () => {
  const [sliderValRed, setSliderValRed] = useState(128);
  const [sliderValGreen, setSliderValGreen] = useState(128);
  const [sliderValBlue, setSliderValBlue] = useState(128);
  const [sliderSize, setSliderSize] = useState(128);
  const [sliderBorderRadius, setSliderBorderRadius] = useState(0);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}> Let's customize this square!</Text>
      <View style={styles.sliderViewStyle}>
        <View
          style={{
            backgroundColor: `rgb(${sliderValRed}, ${sliderValGreen}, ${sliderValBlue})`,
            width: sliderSize,
            height: sliderSize,
            alignSelf: "center",
            borderRadius: sliderBorderRadius,
            margin: 10,
          }}
        />
        <Text style={styles.textStyle}>Red:</Text>
        <Slider
          value={sliderValRed}
          minimumValue={0}
          maximumValue={256}
          onValueChange={(sliderValRed) =>
            setSliderValRed(Math.floor(sliderValRed))
          }
          thumbTintColor="rgb(256,256,256)"
          minimumTrackTintColor="grey"
          maximumTrackTintColor="white"
        />
        <Text style={styles.textStyle}>Green:</Text>
        <Slider
          value={sliderValGreen}
          minimumValue={0}
          maximumValue={256}
          onValueChange={(sliderValGreen) =>
            setSliderValGreen(Math.floor(sliderValGreen))
          }
          thumbTintColor="rgb(256,256,256)"
          minimumTrackTintColor="grey"
          maximumTrackTintColor="white"
        />
        <Text style={styles.textStyle}>Blue:</Text>
        <Slider
          value={sliderValBlue}
          minimumValue={0}
          maximumValue={256}
          onValueChange={(sliderValBlue) =>
            setSliderValBlue(Math.floor(sliderValBlue))
          }
          thumbTintColor="rgb(256,256,256)"
          minimumTrackTintColor="grey"
          maximumTrackTintColor="white"
        />

        <Text style={styles.textStyle}>Size:</Text>
        <Slider
          value={sliderSize}
          minimumValue={10}
          maximumValue={300}
          onValueChange={(sliderSize) => setSliderSize(Math.floor(sliderSize))}
          thumbTintColor="rgb(256,256,256)"
          minimumTrackTintColor="grey"
          maximumTrackTintColor="white"
        />
        <Text style={styles.textStyle}>Border-Radius:</Text>
        <Slider
          value={sliderBorderRadius}
          minimumValue={0}
          maximumValue={sliderSize / 2}
          onValueChange={(sliderBorderRadius) =>
            setSliderBorderRadius(Math.floor(sliderBorderRadius))
          }
          thumbTintColor="rgb(256,256,256)"
          minimumTrackTintColor="grey"
          maximumTrackTintColor="white"
        />
      </View>
    </View>
  );
};

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

export default SquareScreen;
