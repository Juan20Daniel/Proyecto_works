import { useState } from 'react';
import { ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Container, CreateCustomOffer, HeaderApp, UploadImageOffer } from '../../components';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { CreateOffertLayout } from '../../layouts/createOfferLayout/CreateOffertLayout';

interface Props extends StackScreenProps<RootStackParamList, 'CreateOffer'>{}

export const CreateOffer = ({navigation}:Props) => {
    const [ createCustomOffer, setCreateCustomOffer ] = useState(false);
    return (
        <Container>
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
                        ?   <CreateCustomOffer />
                        :   <UploadImageOffer />
                    }     
                </CreateOffertLayout>
            </ScrollView>
        </Container>
    );
}