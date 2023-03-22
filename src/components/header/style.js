import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#ffffff",
    paddingTop: StatusBar.currentHeight + 22,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 22,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
