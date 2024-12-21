import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const WelcomePage = () => {
  const image = require("../assets/bg.jpg");

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.section1}>
        <View style={styles.overlay}>
          <Text style={styles.mainText}>
            {`Start a new \nSocial adventure`}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.section2}>
        <Text style={styles.desc}>
          Get involved with people and events around you
        </Text>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>SignIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupBtnContainer}>
          <View style={styles.signupBtn}>
            <Text style={styles.signupBtnText}>Or Create Account</Text>
            <FontAwesome name="long-arrow-right" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  section1: {
    width: "100%",
    height: 700,
  },
  section2: {
    backgroundColor: "#e0dfd5",
    width: "100%",
    height: 300,
    borderTopRightRadius: 50,
    zIndex: 1,
    bottom: 100,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0.0,0,0,0.8)",
  },
  mainText: {
    fontSize: 30,
    color: "#ddd",
    fontFamily: "poppinsB",
  },
  desc: {
    fontSize: 16,
    color: "black",
    fontFamily: "poppinsB",
  },
  loginBtn: {
    backgroundColor: "#313638",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginBtnText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontFamily: "poppinsR",
  },
  signupBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 150,
  },
  signupBtnText: {
    fontSize: 12,
    fontFamily: "poppinsB",
  },
  signupBtnContainer: {
    alignItems: "flex-end",
    marginTop: 20,
  },
});

export default WelcomePage;
