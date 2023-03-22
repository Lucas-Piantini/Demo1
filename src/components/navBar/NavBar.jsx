import { View } from "react-native";
import { PrimaryButton } from "../primaryButton/PrimaryButton";
import { styles } from "./style";

export const NavBar = () => {
  return (
    <View style={styles.container}>
      <PrimaryButton style={styles.item} onPress={() => console.log("pressed")}>
        Home
      </PrimaryButton>
      <PrimaryButton style={styles.item} onPress={() => console.log("pressed")}>
        About
      </PrimaryButton>
      <PrimaryButton style={styles.item} onPress={() => console.log("pressed")}>
        Contact
      </PrimaryButton>
    </View>
  );
};
