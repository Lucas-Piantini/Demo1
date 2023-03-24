import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    margin: 10,
    borderRadius: 10,
    padding: 15,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  text: {
    fontWeight: "bold",
    marginTop: 10,
  },
  image: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 3,
  },
});
