import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import { primary, secondry } from "../constants";

const StepsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity>
          <FontAwesome6 name="bars" size={32} height={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.text}>SYNCHRONIZED </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text1}>7,363</Text>
        <Text style={styles.text2}>steps today</Text>
      </View>

      <View style={styles.detailsView}>
        <TouchableOpacity style={styles.details}>
          <Text style={styles.textDetails}>History</Text>
          <Entypo name="chevron-with-circle-right" size={16} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "white",
  },
  container: {
    backgroundColor: "black",
    color: "white",
    height: "100%",
    display: "flex",
    flexDirection: "col",
  },
  text: {
    color: "#a1a1aa",
    marginRight: 6,
  },
  textDetails: { fontSize: 16, marginRight: 4 },
  details: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: secondry,
    maxWidth: 120,
  },
  detailsView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginHorizontal: "auto",
    marginLeft: 70,
    padding: 2,
    paddingHorizontal: 40,
    borderRadius: 10,
    backgroundColor: primary,
    color: "white",
    paddingVertical: 8,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
  text1: { color: "white", fontSize: 72 },
  text2: { color: "#a1a1aa", fontSize: 24, marginTop: 10, marginBottom: 20 },
});
export default StepsScreen;
