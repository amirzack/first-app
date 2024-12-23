import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import MainBtn from "../components/mainBtn";

export default function App() {
  const image = require("../assets/bg.jpg");

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
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
          <MainBtn title="SignIn" theme="dark" func={handleLogin} />
          <TouchableOpacity
            style={styles.signupBtnContainer}
            onPress={() => router.push("/register")}
          >
            <View style={styles.signupBtn}>
              <Text style={styles.signupBtnText}>Or Create Account</Text>
              <FontAwesome name="long-arrow-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" backgroundColor="#e0dfd5" />
    </SafeAreaView>
  );
}

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
