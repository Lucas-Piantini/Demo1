import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Grid, Header, NavBar } from "./src/components/index";
import { styles } from "./style";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <NavBar />
      <Grid />
    </View>
  );
}
