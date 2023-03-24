import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./style";

export const Card = ({ title, thumbnailUrl }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: thumbnailUrl }} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Card.propTypes = {
  id: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  thumbnailUrl: PropTypes.node.isRequired,
};
