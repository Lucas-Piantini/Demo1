import { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { Card } from "../card/Card";
import { styles } from "./style";
import axios from "axios";

export const Grid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {data.length > 0 ? (
          data.map((item) =>
            item.id ? (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                completed={item.completed}
              />
            ) : null
          )
        ) : (
          <Text>Cargando</Text>
        )}
      </ScrollView>
    </View>
  );
};
