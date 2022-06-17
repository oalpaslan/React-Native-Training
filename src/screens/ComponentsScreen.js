import React from "react"; //Since we added entire React library in first line, we did not need the curly braces,
import { Text, StyleSheet, View } from "react-native"; //but we need curly braces in second line, since we took small parts from react-native library.

const ComponentsScreen = () => {
  var someVar = "Oğuzhan";
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Welcome, to the React Native</Text>
      <Text style={styles.someVarStyle}> Hi there {someVar}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  someVarStyle: {
    color: "white",
    padding: 20,
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Cochin",
  },
  textStyle: {
    fontSize: 45,
    color: "turquoise",
    textAlign: "center",
    fontFamily: "Georgia",
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "black",
  },
});

export default ComponentsScreen;
