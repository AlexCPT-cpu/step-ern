import {
  AntDesign,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { primary, secondry } from "../constants";

const HomeScreen = () => {
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

      <View style={styles.balance}>
        <Text style={[styles.text, styles.total, { color: "white" }]}>
          TOTAL BALANCE
        </Text>
        <AntDesign name="eye" size={24} color={primary} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={[styles.text1]}>20</Text>
        <Text style={[styles.text2]}>STP</Text>
      </View>
      <View style={styles.detailsView}>
        <TouchableOpacity style={styles.details}>
          <Text style={styles.textDetails}>Details</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.infoWrapper}>
          <Text style={styles.infoText}>
            Did you know that we are the first app to implement crypto into a
            fitness tracker ?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.highlightContainter}>
        <Text style={styles.highlightText}>Highlights</Text>
      </View>

      <View style={styles.stepsContainer}>
        <TouchableOpacity style={styles.stepsWrapper}>
          <View style={styles.stepRow}>
            <FontAwesome6 name="person-walking" size={15} color={secondry} />
            <Text style={styles.stepsText}>Steps</Text>
          </View>

          <Text style={styles.stepsInfo}>
            You walked more yesterday than today by 2,032 steps.
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.coinContainer, { marginTop: 20 }]}>
        <TouchableOpacity style={styles.coinWrapper}>
          <View style={styles.stepRow}>
            <FontAwesome6 name="dollar" size={15} color={secondry} />
            <Text style={styles.stepsText}>Coin</Text>
          </View>

          <Text style={styles.stepsInfo}>
            You highest earning was 7 Stepern Coins on 13/03.
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.peace}>
          <MaterialCommunityIcons
            name="hand-peace"
            size={44}
            color={secondry}
          />
        </TouchableOpacity>

        <Text style={styles.amount}>1 Step = 0.001 STP</Text>
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
  total: {
    fontSize: 14,
  },
  balance: {
    marginTop: 40,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  textWrapper: {
    marginTop: 20,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  textDetails: { fontSize: 16 },
  text1: { color: "white", fontSize: 40 },
  text2: { color: "#9ca3af", fontSize: 18, marginLeft: 4 },
  details: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: secondry,
    maxWidth: 110,
  },
  detailsView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  infoWrapper: {
    marginTop: 40,
    padding: 2,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: primary,
    color: "white",
    paddingVertical: 11,
  },
  info: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "white",
  },
  infoText: { color: "#a1a1aa" },
  highlightContainter: {},
  highlightText: {
    marginVertical: 20,
    color: "white",
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 28,
  },
  stepsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stepsWrapper: {
    padding: 2,
    paddingHorizontal: 28,
    borderRadius: 10,
    backgroundColor: primary,
    color: "white",
    paddingVertical: 17,
  },
  coinContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  coinWrapper: {
    padding: 2,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: primary,
    color: "white",
    paddingVertical: 24,
  },
  stepsInfo: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "white",
    fontSize: 17,
  },
  stepRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  footer: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  stepsText: { color: secondry, marginLeft: 4, fontSize: 14 },
  peace: {
    backgroundColor: primary,
    padding: 8,
    borderRadius: 40,
  },
  amount: {
    marginLeft: 20,
    color: secondry,
    fontWeight: "bold",
    fontSize: 28,
  },
});
export default HomeScreen;
