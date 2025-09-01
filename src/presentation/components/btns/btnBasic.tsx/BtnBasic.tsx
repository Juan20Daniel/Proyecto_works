import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { globalColors, globalStyles } from "../../../../config/global.styles";

interface Props {
    value:string;
    customStylesBox?: StyleProp<ViewStyle>;
    disable?:boolean;
    action:() => void;
}

export const BtnBasic = ({value, customStylesBox, disable=false, action}:Props) => {
    return (
        <View style={[styles.container, customStylesBox]}>
            <Pressable 
                style={({pressed}) => [
                    styles.btn,
                    {
                        opacity: disable 
                            ?   0.4
                            :   pressed ? 0.7 : 1,
                    }
                ]} 
                onPress={() => action()}
            >
                <Text style={styles.textValue}>{value}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
    },
    btn: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:globalColors.azureBlue,
        borderRadius: 15,
    },
    textValue: {
        color: globalColors.white,
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 16
    }
});