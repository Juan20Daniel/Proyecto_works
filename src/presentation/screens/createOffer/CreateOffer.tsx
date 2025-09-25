import { Keyboard, ScrollView, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors } from '@/config/global.styles';
import { CreateOfferProvider, useCreateOffer } from '@/presentation/context/CreateOfferContext';
import { CreateCustomOffer, HeaderApp, UploadImageOffer } from '../../components';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { CreateOffertLayout } from '../../layouts/createOfferLayout/CreateOffertLayout';
import { useEffect, useState } from 'react';
import { useIsTable } from '@/presentation/hooks/useIsTable';

interface Props extends StackScreenProps<RootStackParamList, 'CreateOffer'>{}

export const CreateOffer = (props:Props) => {
   return (
        <CreateOfferProvider>
            <ScreenContent {...props} />
        </CreateOfferProvider>
    );
}

export const ScreenContent = ({navigation}:Props) => {
    const [ keyboarIsShow, setKeyboardIsShow ] = useState(false);
    const { removeFocus, createCustomOffer } = useCreateOffer();
    const { top } = useSafeAreaInsets();
    const width = useWindowDimensions().width;
    const isTable = useIsTable();
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardIsShow(true);
        });
        const hideSuscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardIsShow(false);
        })
        return () => {
            showSubscription.remove();
            hideSuscription.remove();
        }
    },[]);
    return (
        <ScrollView 
            style={{flex: 1, backgroundColor: globalColors.white}} 
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps='handled'
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[0]}
        >
            <HeaderApp
                subText='Crear oferta'
                paddingTop={top+20}
                actionBtnClose={() => navigation.goBack()}
                actionBox={removeFocus}
            />
            <TouchableWithoutFeedback accessible={false} onPress={removeFocus}>
                <View style={{width, backgroundColor:globalColors.white}}>
                    <CreateOffertLayout>
                        {createCustomOffer
                            ?   <CreateCustomOffer />
                            :   <UploadImageOffer />
                        }     
                    </CreateOffertLayout>
                    <View style={{
                        width:'100%', 
                        height:isTable 
                            ?   50
                            :   keyboarIsShow ? 350 : 30, 
                        backgroundColor:globalColors.white
                    }} />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
}