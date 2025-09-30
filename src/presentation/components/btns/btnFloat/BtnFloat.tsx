import { Pressable, StyleSheet } from "react-native";
import { globalColors, globalStyles } from "@/config/global.styles";
import { Ionicons } from "../../icon/Ionicons";

interface Props {
    iconName: string;
    action: () => void;
}

export const BtnFloat = ({iconName, action}:Props) => {
    return (
        <Pressable 
            style={({pressed}) => [
                styles.container,
                {backgroundColor:pressed ? globalColors.lightGray : globalColors.white}
            ]} 
            onPress={() => action()}
        >
            <Ionicons name={iconName} size={35} color={globalColors.black} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        right: 10,
        padding: 10,
        borderRadius: 50,
        ...globalStyles.shadow
    }
});