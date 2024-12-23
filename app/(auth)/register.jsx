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
import { router } from "expo-router";

const RegisterPage = () => {
  //useState hooks
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setphone] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isTermAccepted, setIsTermAccepted] = useState(false);

  //Functions
  const handleSignup = () => {
    if (password !== confirm) {
      ToastAndroid.show("Check your password again", ToastAndroid.SHORT);
    }
    if (!isTermAccepted) {
      ToastAndroid.show(
        "You must accept the Term and Conditions",
        ToastAndroid.SHORT
      );
    }
    ToastAndroid.show("Sign Up Successfully", ToastAndroid.SHORT);
    console.log(`full name :${fullName} \nemail:${email}\n phone:${phone}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <View>
          <BackBtn color={"#313638"} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.mainText}>{`Create \nAccount. `}</Text>
        </View>
      </View>
      <View style={styles.mainSection}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#888"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setphone}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry={true}
          value={confirm}
          onChangeText={setConfirm}
        />
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
            value={isTermAccepted}
            onValueChange={setIsTermAccepted}
            color={isTermAccepted ? "#4630EB" : undefined}
          />
          <Text style={{ fontFamily: "poppinsR", color: "white" }}>
            Agree to terms and conditions
          </Text>
        </View>
        <MainBtn title="Signup" theme="light" func={handleSignup} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "70%",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", fontFamily: "poppins-light" }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={{ color: "white", fontFamily: "poppins-light" }}>
              Sign in
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

export default RegisterPage;
