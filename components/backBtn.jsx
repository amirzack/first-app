import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
const BackBtn = ({ color }) => {
  return (
    <AntDesign
      name="arrowleft"
      size={24}
      color={color}
      onPress={() => router.back()}
    />
  );
};

export default BackBtn;
