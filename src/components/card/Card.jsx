import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./style";

export const Card = ({ id, title, completed }) => {
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Text>{`${completed}`}</Text>
    </View>
  );
};

Card.propTypes = {
  id: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  completed: PropTypes.bool.isRequired,
};
