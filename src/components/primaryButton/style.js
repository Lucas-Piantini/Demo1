import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pressableContainer: {
    flex: 1,
    borderRadius: 28,
    overflow: "hidden",
    padding: 5,
    marginBottom: 12,
  },

  textContainer: {
    backgroundColor: "#1fd65f",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
