import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TitleApp } from '../ui/titleApp/TitleApp';
import { NavLink } from './NavLink';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';

export const Navbar = () => {
    const {top} = useSafeAreaInsets();
    return (
        <View style={{...styles.container, paddingTop:top, height: 60+top,}}>
            <TitleApp />
            <View style={styles.boxButtons}>
                <NavLink iconName='search-outline' redirect='Search' />
                <NavLink iconName='notifications-outline' redirect='Notifications' />
                <NavLink iconName='person-circle' redirect='Profile' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: globalStyles.paddingHorizontal,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: globalColors.lightGray,
        backgroundColor: globalColors.white,
    },
    boxButtons: {
        flexDirection: 'row',
        gap: 20
    }
});