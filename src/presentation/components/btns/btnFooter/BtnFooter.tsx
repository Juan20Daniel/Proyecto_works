import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '../../icon/Ionicons';
import { globalColors, globalStyles } from '../../../../config/global.styles';

interface Props {
    value: string;
    iconName: string;
    height?: number;
    sizeIcon?: number;
    action: () => void;
}

export const BtnFooter = ({value, iconName, height=60, sizeIcon=20, action}:Props) => {
    return (
        <View style={{...styles.container, height:height}}>
            <View style={styles.boxBtnFilter}>
                <Pressable 
                    onPress={() => action()}
                    style={({pressed}) => [
                        styles.btnFilter,
                        {backgroundColor:pressed ? globalColors.cornflowerBlue : globalColors.azureBlue}
                    ]}
                >
                    <Text style={styles.textBtnFlter}>{value}</Text>
                    <Ionicons name={iconName} size={sizeIcon} color={globalColors.white} />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.white,
        position: 'absolute',
        bottom:0,
        borderTopWidth: 1,
        borderTopColor: globalColors.lightGray,
        width: '100%',
    },
    boxBtnFilter: {
        position: 'relative',
        alignItems: 'center',
        width:'100%',
        padding: 50,
    },
    btnFilter: {
        position: 'absolute',
        top:-40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 50,
        maxWidth: 350,
        marginVertical:15,
        width:'100%',
        height: 50,
        borderRadius: 30,
        ...globalStyles.shadow
    },
    textBtnFlter: {
        color: globalColors.white,
        fontSize: 20
    }
});