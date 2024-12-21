import { StyleSheet, Text, View } from "react-native";
import WelcomePage from "./pages/welcomePage";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function App() {
  const [loading, error] = useFonts({
    poppinsB: require("./assets/fonts/Poppins-Bold.ttf"),
    poppinsR: require("./assets/fonts/Poppins-Regular.ttf"),
    poppinsL: require("./assets/fonts/Poppins-Light.ttf"),
  });
  if (!loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <WelcomePage />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
