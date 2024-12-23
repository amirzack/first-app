import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const MainBtn = ({ title, route, theme, func }) => {
  return (
    <TouchableOpacity
      style={[
        styles.loginBtn,
        { backgroundColor: theme === "dark" ? "#313638" : "#e0dfd5" },
      ]}
      onPress={func}
    >
      <Text
        style={[
          styles.loginBtnText,
          { color: theme === "dark" ? "#e0dfd5" : "#313638" },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginBtnText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "poppinsR",
  },
});
export default MainBtn;
