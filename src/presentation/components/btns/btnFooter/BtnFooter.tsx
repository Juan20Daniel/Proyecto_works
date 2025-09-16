import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/config/global.styles';
import { Ionicons } from '../../icon/Ionicons';

interface Props {
    disable?:boolean;
    value: string;
    iconName: string;
    height?: number;
    sizeIcon?: number;
    action: () => void;
}

export const BtnFooter = ({disable=false,value, iconName, height=60, sizeIcon=20, action}:Props) => {
    return (
        <View style={{...styles.container, height:height}}>
            <View style={styles.boxBtnFilter}>
                <Pressable 
                    onPress={() => {
                        if(disable) return;
                        action()
                    }}
                    style={({pressed}) => [
                        styles.btnFilter,
                        {backgroundColor:disable
                            ?   globalColors.softGray
                            :   pressed ? globalColors.cornflowerBlue : globalColors.azureBlue}
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