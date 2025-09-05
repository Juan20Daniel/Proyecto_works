import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators/StackNavigator";
import { BtnClose, GoogleMap, OfferDetails, ModalOfferOptions, ModalOfferSettings } from "../../components";
import { StackScreenProps } from "@react-navigation/stack";
import { globalColors } from "../../../config/global.styles";
import BottomSheet from "@gorhom/bottom-sheet";
import { OfferOptionsProvider } from "../../context/OfferOptionsContext";
import { OfferSettingsProvider } from "../../context/OfferSettingsContext";

interface Props extends StackScreenProps<RootStackParamList, 'Offer'>{}

export const Offer = ({route}:Props) => {
  const { typeUser } = route.params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['40%', '85%'];
  return (
    <OfferSettingsProvider>
      <OfferOptionsProvider>
        <View style={styles.container}>
          <BtnClose top={40}  backTo={() => navigation.goBack()} />
          <GoogleMap 
            location={{
              latitude: 19.0906368,
              longitude: -104.2972672 
            }}
            height='70%' 
          />
          <BottomSheet
            ref={sheetRef}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            enablePanDownToClose={false}
            handleIndicatorStyle={{width:100, backgroundColor: globalColors.darkGray}}
          >
            <OfferDetails typeUser={typeUser} />
          </BottomSheet>
        </View>
        {typeUser === 'user' &&
          <ModalOfferOptions />
        }
        {typeUser === 'owner' &&
          <ModalOfferSettings />
        }
      </OfferOptionsProvider>
    </OfferSettingsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  }
});