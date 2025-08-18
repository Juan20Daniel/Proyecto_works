import { StyleSheet, Text, View } from 'react-native';
import { TitleApp } from '../titleApp/TitleApp';
import { globalColors, globalStyles } from '../../../config/global.styles';
import { BtnClose } from '../btns/btnClose/BtnClose';

interface Props {
    alignTitle?: 'center'|'flex-start',
    subText?: string;
    actionBtnClose: () => void;
}

export const HeaderApp = ({alignTitle='flex-start', subText, actionBtnClose}:Props) => {
    return (
        <View style={{...styles.container, justifyContent: alignTitle}}>
            <TitleApp />
            {subText &&
                <>
                    <View style={styles.point} />
                    <Text style={styles.subText}>{subText}</Text>
                </>
            }
            <BtnClose backTo={() => actionBtnClose()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        gap:10,
        paddingTop: 20,
        marginLeft: globalStyles.marginHorizontal 
    },
    point: {
        width:7, 
        height: 7, 
        borderRadius: 4, 
        backgroundColor: 'black'
    },
    subText: {
        fontSize: 16, 
        color:globalColors.darkGray
    }
});