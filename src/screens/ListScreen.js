import React from "react";
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

  return (
    <FlatList
      style={styles.viewStyle}
      data={friends}
      showsVerticalScrollIndicator={true}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.listItemStyle}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  listItemStyle: {
    color: "white",
    textAlign: "center",
    margin: 50,
  },
  viewStyle: {
    backgroundColor: "black",
  },
});

export default ListScreen;
