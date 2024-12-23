import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackBtn from "../../components/backBtn";
import Checkbox from "expo-checkbox";
import MainBtn from "../../components/mainBtn";
import Feather from "@expo/vector-icons/Feather";

const LoginPage = () => {
  //useState hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  //Functions
  const handleSignin = () => {
    ToastAndroid.show("Sign in Successfully Welcome", ToastAndroid.SHORT);
  };

  const handleShowPaswword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <View>
          <BackBtn color={"#313638"} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.mainText}>{`Welcome \nBack ! `}</Text>
        </View>
      </View>
      <View style={styles.mainSection}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            secureTextEntry={!showPassword ? true : false}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            onPress={handleShowPaswword}
            style={{ position: "absolute", right: 10 }}
          >
            {!showPassword ? (
              <Feather name="eye" size={24} color="white" />
            ) : (
              <Feather name="eye-off" size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Checkbox
            style={styles.checkbox}
            value={remember}
            onValueChange={setRemember}
            color={remember ? "#4630EB" : undefined}
          />
          <Text style={{ fontFamily: "poppinsR", color: "white" }}>
            Remember me
          </Text>
        </View>
        <MainBtn title="Signin" theme="light" func={handleSignin} />
        <View
          style={{
            alignItems: "center",
            width: "100%",
            justifyContent: "flex-end",
            marginTop: 30,
          }}
        >
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={{ color: "white", fontFamily: "poppins-light" }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313638",
  },
  headerWrapper: {
    height: 200,
    backgroundColor: "#e0dfd5",
    padding: 30,
    alignItems: "flex-start",
    borderBottomLeftRadius: 60,
    zIndex: 1,
  },
  mainSection: {
    flex: 1,
    height: 800,
    backgroundColor: "#313638",
    marginTop: 30,
    padding: 30,
  },
  mainText: {
    fontFamily: "poppinsB",
    fontSize: 30,
    color: "#313638",
  },
  input: {
    color: "white",
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
  },
  checkbox: {
    margin: 5,
  },
});

export default LoginPage;
