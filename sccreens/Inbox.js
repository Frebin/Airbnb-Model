import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Inbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Inbox Page</Text>
      </View>
    );
  }
}

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
