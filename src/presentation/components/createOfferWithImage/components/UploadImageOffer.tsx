import { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { PictureAdapter } from '@/config/adapters/picture-adapter';
import { useIsTable } from '@/presentation/hooks/useIsTable';
import { AlertMessage } from '../../alerts/alertMessage/AlertMessage';
import { Placeholder } from './Placeholder';

export const UploadImageOffer = () => {
    const [ offerImage, setOfferImage ] = useState<string | null>(null);
    const [ alertMessage, setAlertMessage ] = useState({visible:false, title:'', message:''});
    const isTable = useIsTable();
    const loadImage = async () => {
        try {
            const result = await PictureAdapter.getPictureFromLibrary(200000);
            setOfferImage(result.url);
        } catch (error) {
            const errorMessage = (error as Error).message;
            setAlertMessage({visible:true, title:'Error al cargar la imagen', message:errorMessage});
        }
    }
    return (
       <>
            <View style={{
                ...styles.container, 
                height: isTable ? 500 : 350, 
                marginTop:isTable ? 50 : 30
            }}>
                <Pressable
                    onPress={() => loadImage()}
                    style={({pressed}) => [{flex:1, opacity: pressed ? 0.5 : 1}]}
                >
                    {offerImage 
                        ?   <Image
                                source={{uri:offerImage}}
                                style={styles.imgOffer}
                            />
                        :   <Placeholder />
                    }
                </Pressable>
            </View>
            <AlertMessage 
                alertState={alertMessage}
                closeAlert={() => setAlertMessage({visible:false, title:'', message:''})}
            />
       </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        paddingHorizontal:10,
        marginBottom: 20,
    },
    imgOffer: {
        objectFit: 'contain', 
        flex:1
    }
});