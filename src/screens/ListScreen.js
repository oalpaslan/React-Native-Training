import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 25 },
    { name: "Friend #3", age: 22 },
    { name: "Friend #4", age: 27 },
    { name: "Friend #5", age: 31 },
    { name: "Friend #6", age: 24 },
    { name: "Friend #7", age: 29 },
    { name: "Friend #8", age: 32 },
    { name: "Friend #9", age: 35 },
  ];

  const [colors, setColors] = useState([]);

  return (
    <FlatList
      style={styles.viewStyle}
      data={friends}
      showsVerticalScrollIndicator={true}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: createRGB(),
                marginTop: 20,
              }}
            />

            <Text style={styles.listItemStyle}>
              {item.name} - Age: {item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const createRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  listItemStyle: {
    color: "white",
    textAlign: "center",
    margin: 20,
  },
  viewStyle: {
    backgroundColor: "black",
  },
});

export default ListScreen;
