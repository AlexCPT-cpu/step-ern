import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const WalletScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <FontAwesome6 name="bars" size={24} color="black" />
        <Text style={styles.text}>Div goes here wjwk</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1 },
  container: {
    backgroundColor: "black",
    color: "white",
    height: "100%",
  },
  text: {
    color: "white",
  },
});
export default WalletScreen;
