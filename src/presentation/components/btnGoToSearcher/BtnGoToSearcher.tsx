import { Pressable, StyleSheet, Text } from 'react-native';
import { globalColors, globalStyles } from '../../../config/global.styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {Ionicons} from '../icon/Ionicons';
import type { RootStackParamList } from '../../navigators/StackNavigator';

export const BtnGoToSearch = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <Pressable style={({pressed}) =>  [
                styles.container,
                {borderColor: pressed ? globalColors.azureBlue : 'white'}
            ]}
            onPress={() => navigation.navigate('Search')}
        >
            <Ionicons name='search-outline' size={25} color='#ACACAC' />
            <Text style={styles.text}>Buscar trabajo</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: globalStyles.marginHorizontal,
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 10,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 20,
        backgroundColor: '#fff', // importante para Android
        shadowColor: '#000000b4',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.18,
        shadowRadius: 8,
        elevation: 8,
    },
    text: {
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 20,
        color: '#A4A4A4'
    }
});