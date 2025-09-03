import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '../../icon/Ionicons';
import { globalColors, globalStyles } from '../../../../config/global.styles';

interface Props {
    placeholder: string;
    showIconLeft?: boolean;
    value: string;
    iconName?:string;
    maxWidth?:number,
    action:() => void;
}

export const BtnShowOptions = ({
    placeholder, 
    showIconLeft=false, 
    value,
    iconName='help-outline', 
    maxWidth=500, 
    action
}:Props) => {
    return (
        <Pressable 
            style={({pressed}) => [
                styles.container,
                {
                    maxWidth,
                    opacity: pressed ? 0.6 : 1
                }
            ]}
            onPress={() => {
                action && action();
            }}
        >
            <View style={styles.boxLabel}>
                {showIconLeft && <Ionicons name={iconName} color={globalColors.softGray} size={25} />}
                {value !== ''
                    ?   <Text style={styles.value}>{value}</Text>
                    :   <Text style={styles.label}>{placeholder}</Text>
                }
            </View>
            <Ionicons name='chevron-down-outline' />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%',
        height: 60,
        borderRadius: 20,
        backgroundColor: globalColors.white,
        borderWidth: 1,
        borderColor:globalColors.lightGray
    },
    boxLabel: {
        flexDirection: 'row',
        gap: 20,
    },
    label: {
        color:globalColors.softGray,
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 16
    },
    value: {
        color:globalColors.black,
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 16
    }
});