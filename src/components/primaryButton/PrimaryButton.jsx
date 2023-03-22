import { Text, View, Pressable } from "react-native";
import { styles } from "./style";
import PropTypes from "prop-types";

export const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.pressableContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? styles.textContainer : [styles.textContainer, pressed]
        }
        onPress={onPress}
        android_ripple={{ color: "#189d46" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
};
