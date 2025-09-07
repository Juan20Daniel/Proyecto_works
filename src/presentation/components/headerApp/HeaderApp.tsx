import { StyleSheet, Text, View } from 'react-native';
import { TitleApp } from '../titleApp/TitleApp';
import { globalColors, globalStyles } from '../../../config/global.styles';
import { BtnClose } from '../btns/btnClose/BtnClose';
import { Ionicons } from '../icon/Ionicons';

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
                    <Ionicons name='ellipse' size={7} />
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
    subText: {
        fontSize: 16, 
        color:globalColors.darkGray
    }
});