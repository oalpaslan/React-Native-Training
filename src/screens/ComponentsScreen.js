import React, { useState } from "react"; //Since we added entire React library in first line, we did not need the curly braces,
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"; //but we need curly braces in second line, since we took small parts from react-native library.

const ComponentsScreen = () => {
  var someVar = "Oğuzhan";
  const [colors, setColors] = useState([]);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: createRGB(),
      }}
    >
      <Text style={styles.textStyle}>Welcome, to React Native</Text>
      <Text style={styles.someVarStyle}> Hi there {someVar}</Text>
      <Text style={styles.textStyle2}> Press this button for some magic: </Text>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setColors([createRGB()])}
        color="white"
      >
        <Text>Party</Text>
      </TouchableOpacity>
    </View>
  );
};
const createRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};
const styles = StyleSheet.create({
  someVarStyle: {
    color: "white",
    padding: 20,
    fontSize: 20,
    fontFamily: "Georgia",
  },
  textStyle: {
    fontSize: 45,
    color: "turquoise",
    textAlign: "center",
    fontFamily: "Georgia",
  },
  textStyle2: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontFamily: "Georgia",
  },
  buttonStyle: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
    margin: 10,
    backgroundColor: "white",
  },
});

export default ComponentsScreen;
