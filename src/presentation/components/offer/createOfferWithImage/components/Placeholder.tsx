import { Image, StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { useIsTablet } from '@/presentation/hooks/useIsTablet';

export const Placeholder = () => {
     const isTable = useIsTablet();
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/createOffer/uploadOfferImg.png')}
                style={{
                    objectFit: 'contain', 
                    width: isTable ? 300 : 250, 
                    height: isTable ? 200 : 150
                }}
            />
            <Text style={{...styles.message, fontSize: isTable ? 20 : 15}}>
                Presiona para cargar la foto de alguna vacante aquí.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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