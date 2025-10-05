import { Pressable, StyleSheet, Text } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import {Ionicons} from '../icon/Ionicons';


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
        backgroundColor: globalColors.white,
        ...globalStyles.shadow
    },
    text: {
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 20,
        color: '#A4A4A4'
    }
});