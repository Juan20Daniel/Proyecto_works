import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import { globalColors, globalStyles } from "@/config/global.styles";
import { Ionicons } from "../../icon/Ionicons";

interface Props {
    iconName: string;
    value?: string;
    customStyle?: StyleProp<ViewStyle>;
    action: () => void;
}

export const BtnFloat = ({iconName, value, customStyle, action}:Props) => {
    return (
        <Pressable 
            style={({pressed}) => [
                styles.container,
                {   
                    backgroundColor:pressed ? globalColors.cornflowerBlue : globalColors.azureBlue,
                    paddingRight:value ? 20 : 10,
                },
                customStyle,
            ]} 
            onPress={() => action()}
        >
            <Ionicons name={iconName} size={25} color={globalColors.white} />
            {value && <Text style={styles.value}>{value}</Text>}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        left: 10,
        top: 40,
        padding: 10,
        borderRadius: 50,
        zIndex: 3,
        ...globalStyles.shadow
    },
    value: {
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium,
        color: globalColors.white
    }
});