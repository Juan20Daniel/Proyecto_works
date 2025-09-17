import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/config/global.styles';
import { Ionicons } from '@/presentation/components/icon/Ionicons';

interface Props {
    name:string;
    placeholder: string;
    isFocus:boolean;
    value: string;
    showIconRight?: boolean;
    iconName?: string;
    onPress:(field:string) => void;
}

export const BtnSelect = ({
    name, 
    placeholder, 
    isFocus, 
    value, 
    showIconRight=false, 
    iconName='help-outline', 
    onPress
}:Props) => {
    return (
        <Pressable 
            style={{
                ...styles.container,
                borderColor:isFocus ? globalColors.azureBlue : globalColors.softGray
            }}
            onPress={() => onPress(name)}
        >
            <Text style={styles.textBtn}>
                {value === '' 
                    ? <Text style={{color:isFocus ? globalColors.azureBlue : globalColors.black}}>{placeholder}</Text> 
                    : value}
            </Text>
            {showIconRight &&
                <View style={styles.boxIcon}>
                    <Ionicons name={iconName} />
                </View>
            }
        </Pressable>
    );
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 65,
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 23,
        justifyContent: 'center',
    },
    textBtn: {
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium,
    },
    boxIcon: {
        position: 'absolute',
        right: 23,
    }
});