import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components"
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text style={styles.touchableStyle}>Go to List </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Images")}>
        <Text style={styles.touchableStyle}>Go to Images </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    margin: 20,
  },
  touchableStyle: {
    alignSelf: "center",
    fontSize: 20,
    color: "blue",
  },
});

export default HomeScreen;
