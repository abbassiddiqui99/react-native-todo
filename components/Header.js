import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FadeInView from "./animation/animation";

const Header = () => {
  return (
    // <FadeInView>
    <View style={styles.container}>
      <Text style={styles.title}>Todo's List</Text>
    </View>
    // </FadeInView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: 80,
    paddingTop: 30,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
