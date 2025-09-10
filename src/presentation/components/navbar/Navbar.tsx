import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TitleApp } from '../titleApp/TitleApp';
import { globalColors, globalStyles } from '../../../config/global.styles';
import { NavLink } from './NavLink';

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
        paddingHorizontal: globalStyles.marginHorizontal,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: globalColors.lightGray,
        backgroundColor: '#fff',
    },
    boxButtons: {
        flexDirection: 'row',
        gap: 20
    }
});