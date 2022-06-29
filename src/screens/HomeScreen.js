import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>Hello</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Components")}
        title="Go to Components"
      >
        <Text style={styles.touchableStyle}>Go to Components</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text style={styles.touchableStyle}>Go to List </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Images")}>
        <Text style={styles.touchableStyle}>Go to Images </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Square")}>
        <Text style={styles.touchableStyle}>Go to the Square </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 30,
    alignSelf: "center",
    margin: 20,
    fontFamily: "Helvetica",
  },
  touchableStyle: {
    alignSelf: "center",
    fontSize: 20,
    margin: 10,
    color: "green",
    fontFamily: "Helvetica-Light",
  },
});

export default HomeScreen;
