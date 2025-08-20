import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import BottomSheet, { BottomSheetView, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootStackParamList } from "../../navigators/StackNavigator";
import { BtnClose } from "../../components";

export const Offer = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%', '90%'], []);

  // callbacks
  const handleSheetChange = useCallback((index:any) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index:any) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, [])
  return (
    <GestureHandlerRootView style={styles.container}>
      <BtnClose top={40}  backTo={() => navigation.navigate('Home')} />
      <View style={styles.containerMap}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 19.0906368,
            longitude: -104.2972672,
            latitudeDelta: 0.030,
            longitudeDelta: 0.0136,
          }}
        >
        </MapView>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
       
        enableDynamicSizing={false}
        onChange={handleSheetChange}
      >
        <BottomSheetScrollView>
          <View style={{width: 100, height: 200, backgroundColor: 'green', marginBottom: 20}}>
            <Text>Content</Text>
          </View>
          <View style={{width: 100, height: 200, backgroundColor: 'green', marginBottom: 20}}>
            <Text>Content</Text>
          </View>
          <View style={{width: 100, height: 200, backgroundColor: 'green', marginBottom: 20}}>
            <Text>Content</Text>
          </View>
          <View style={{width: 100, height: 200, backgroundColor: 'green', marginBottom: 20}}>
            <Text>Content</Text>
          </View>
          <View style={{width: 100, height: 200, backgroundColor: 'green', marginBottom: 20}}>
            <Text>Content</Text>
          </View>
          <View style={{width: 100, height: 200, backgroundColor: 'green', marginBottom: 20}}>
            <Text>Content</Text>
          </View>
          <View style={{width: 100, height: 200, backgroundColor: 'green', marginBottom: 20}}>
            <Text>Content</Text>
          </View>
          <View style={{width: 100, height: 200, backgroundColor: 'green', marginBottom: 20}}>
            <Text>Content</Text>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  containerMap: {
    width:'100%',
    height: '65%',
    ...StyleSheet.absoluteFillObject,
  },
  map: {
  ...StyleSheet.absoluteFillObject,
  },
  details: {
    flex: 1,
  },
});

{/* <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} /> */}