import { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { Card } from "../card/Card";
import { styles } from "./style";
import axios from "axios";

export const Grid = () => {
  const [datos, setDatos] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=6")
      .then((response) => {
        setDatos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {datos ? (
          datos.map((item) =>
            item.id ? (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                thumbnailUrl={item.thumbnailUrl}
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
