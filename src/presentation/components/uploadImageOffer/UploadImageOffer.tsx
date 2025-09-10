import { Image, StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '../../../config/global.styles';
import { useIsTable } from '../../hooks/useIsTable';

export const UploadImageOffer = () => {
    const isTable = useIsTable();
    return (
        <View style={{width: '100%', height: isTable ? 500 : 350, marginTop:isTable ? 50 : 30}}>
            <View style={styles.content}>
                <Image 
                    source={require('../../../assets/createOffer/uploadOfferImg.png')}
                    style={{
                        objectFit: 'contain', 
                        width: isTable ? 300 : 250, 
                        height: isTable ? 200 : 150
                    }}
                />
                <Text style={{...styles.message, fontSize: isTable ? 20 : 15,}}>
                    Presiona para cargar la foto de alguna vacante aquí.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: globalColors.lightGray,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
    },
    message: {
        fontFamily: globalStyles.fontMonserratMedium,
        color: globalColors.gray,
        maxWidth: 300,
        textAlign: 'center'
    }
});