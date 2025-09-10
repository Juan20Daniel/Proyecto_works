import { Pressable, StyleSheet, Text } from "react-native";
import { globalColors } from "../../../../config/global.styles";
import { Ionicons } from "../../icon/Ionicons";

interface Props {
    iconName:string;
    text:string;
}

export const BasicModalOption = ({ iconName, text }:Props) => {
    return (
        <Pressable 
            style={({pressed}) => [
                styles.container,
                {backgroundColor: pressed ? globalColors.lightGray : globalColors.white}
            ]}
        >
            <Ionicons name={iconName} size={30} />
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>        
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: globalColors.lightGray,
        gap: 20,
        marginTop: 5,
        height: 50,
        paddingHorizontal: 30,
    },
    text: {
        fontSize: 14
    }
});