
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Bem vindo ao nosso app</Text>
      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        Login
      </Button>
    </View>
  );
}
