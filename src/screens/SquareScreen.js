import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ComponentAdjuster from "../components/ComponentAdjuster";

const SquareScreen = () => {
  const [sliderValRed, setSliderValRed] = useState(128);
  const [sliderValGreen, setSliderValGreen] = useState(128);
  const [sliderValBlue, setSliderValBlue] = useState(128);
  const [sliderSize, setSliderSize] = useState(128);
  const [sliderBorderRadius, setSliderBorderRadius] = useState(0);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}> Let's customize this square!</Text>
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
      <ComponentAdjuster
        adjustment="Red:"
        value={sliderValRed}
        minVal={0}
        maxVal={256}
        onChange={(sliderValRed) => setSliderValRed(Math.floor(sliderValRed))}
      />
      <ComponentAdjuster
        adjustment="Green:"
        value={sliderValGreen}
        minVal={0}
        maxVal={256}
        onChange={(sliderValGreen) =>
          setSliderValGreen(Math.floor(sliderValGreen))
        }
      />
      <ComponentAdjuster
        adjustment="Blue:"
        value={sliderValBlue}
        minVal={0}
        maxVal={256}
        onChange={(sliderValBlue) =>
          setSliderValBlue(Math.floor(sliderValBlue))
        }
      />
      <ComponentAdjuster
        adjustment="Size:"
        value={sliderSize}
        minVal={10}
        maxVal={300}
        onChange={(sliderSize) => setSliderSize(Math.floor(sliderSize))}
      />
      <ComponentAdjuster
        adjustment="Border-Radius:"
        value={sliderBorderRadius}
        minVal={0}
        maxVal={sliderSize / 2}
        onChange={(sliderBorderRadius) =>
          setSliderBorderRadius(Math.floor(sliderBorderRadius))
        }
      />
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
