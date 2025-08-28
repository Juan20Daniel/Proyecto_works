import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export const Profile = () => {
  const [count, setCount] = useState(0);

  const sayHello = () => {
    console.log("Hola");
  };

  console.log("Referencia de sayHello:");

  return (
    <View style={{marginTop: 300, gap: 50}}>
      <Text>{count}</Text>
      <Pressable onPress={() => setCount(count + 1)}>
        <Text>Sumar</Text>
      </Pressable>
      <Pressable onPress={sayHello}>
        <Text>Saludar</Text>
      </Pressable>
    </View>
  );
}