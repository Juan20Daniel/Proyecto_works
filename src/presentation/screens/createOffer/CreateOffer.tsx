import { useReducer, useState } from 'react';
import { ScrollView, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { globalColors } from '@/config/global.styles';
import { CreateCustomOffer, HeaderApp, UploadImageOffer } from '../../components';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { CreateOffertLayout } from '../../layouts/createOfferLayout/CreateOffertLayout';
import { simpleFormReducer } from '@/presentation/reducers/simpleForm/simpleForm';

interface Props extends StackScreenProps<RootStackParamList, 'CreateOffer'>{}

export const initialStateSimpleForm = {
    values: {
        logoCompany: { value:'', isFocus:false },
        typeWork: { value:'', isFocus:true },
    },
    errors: {
        logoCompany: { status:null, valid:null },
        typeWork: { status:null, valid:null },
    }
}

export const CreateOffer = ({navigation}:Props) => {
    const [ form, dispatch ] = useReducer(simpleFormReducer, initialStateSimpleForm);
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const [ createCustomOffer, setCreateCustomOffer ] = useState(false);
    const putFocus = (field:string) => {
        dispatch({
            type:'PUT_FOCUS_INPUT',
            field:field
        })
    }
    const closeAll = () => {
        dispatch({
            type:'REMOVE_FOCUS_INPUT'
        });
    }
    return (
        <TouchableWithoutFeedback onPress={closeAll}>
            <View style={{width, height, backgroundColor:globalColors.white}}>
                <HeaderApp 
                    subText='Crear oferta'
                    actionBtnClose={() => navigation.goBack()}
                />
                <ScrollView style={{flex: 1, marginTop:15, marginBottom: 50}}>
                    <CreateOffertLayout
                        typeForm={createCustomOffer}
                        changeForm={setCreateCustomOffer}
                    >
                        {createCustomOffer
                            ?   <CreateCustomOffer 
                                    form={form} 
                                    putFocus={putFocus}
                                />
                            :   <UploadImageOffer />
                        }     
                    </CreateOffertLayout>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
}