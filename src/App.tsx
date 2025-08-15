import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./presentation/navigators/StackNavigator";
import { StatusBar } from "react-native";
const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;