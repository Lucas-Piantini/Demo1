import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height + 25,
    backgroundColor: "#ebebeb",
  },
});
