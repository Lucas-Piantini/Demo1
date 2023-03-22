import { Text, View } from "react-native";
import { styles } from "./style";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Demo</Text>
    </View>
  );
};
