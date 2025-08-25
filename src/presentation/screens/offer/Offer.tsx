import { useRef, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators/StackNavigator";
import { BtnClose, GoogleMap, OfferDetails, ModalOfferOptions, ModalOfferSettings } from "../../components";
import BottomSheet from "@gorhom/bottom-sheet";
import { StackScreenProps } from "@react-navigation/stack";

interface Props extends StackScreenProps<RootStackParamList, 'Offer'>{}

export const Offer = ({route}:Props) => {
  const { typeUser } = route.params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%', '90%'], []);
  return (
    <View style={styles.container}>
      <BtnClose top={40}  backTo={() => navigation.goBack()} />
      <GoogleMap 
        location={{
          latitude: 19.0906368,
          longitude: -104.2972672 
        }}
        height='65%' 
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        enablePanDownToClose={false}
      >
        <OfferDetails typeUser={typeUser} />
      </BottomSheet>
      {typeUser === 'user' &&
        <ModalOfferOptions />
      }
      {typeUser === 'owner' &&
        <ModalOfferSettings />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  }
});