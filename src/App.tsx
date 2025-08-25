import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./presentation/navigators/StackNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar, StyleSheet } from "react-native";
import { OfferOptionsProvider } from "./presentation/context/OfferOptionsContext";
import { OfferSettingsProvider } from "./presentation/context/OfferSettingsContext";
const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <GestureHandlerRootView style={styles.container}>
        <OfferOptionsProvider>
          <OfferSettingsProvider>
            <NavigationContainer>
              <StackNavigator />
            </NavigationContainer>
          </OfferSettingsProvider>
        </OfferOptionsProvider>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;