import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { TitleApp } from '../titleApp/TitleApp';
import { globalColors, globalStyles } from '../../../config/global.styles';
import { BtnClose } from '../btns/btnClose/BtnClose';
import { Ionicons } from '../icon/Ionicons';

interface Props {
    alignTitle?: 'center'|'flex-start',
    subText?: string;
    paddingTop?: number; 
    actionBtnClose: () => void;
    actionBox?: () => void;
}

export const HeaderApp = ({alignTitle='flex-start', subText, paddingTop, actionBtnClose, actionBox}:Props) => {
    return (
        <TouchableWithoutFeedback onPress={() => {
            actionBox && actionBox();
        }}>
            <View style={{...styles.container, justifyContent: alignTitle, paddingTop:paddingTop??20}}>
                <TitleApp />
                {subText &&
                    <>
                        <Ionicons name='ellipse' size={7} />
                        <Text style={styles.subText}>{subText}</Text>
                    </>
                }
                <BtnClose backTo={() => {
                    console.log('exce')
                    actionBtnClose()
                    
                }} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        gap:10,
        backgroundColor: globalColors.white,
        paddingLeft: globalStyles.marginHorizontal 
    },
    subText: {
        fontSize: 16, 
        color:globalColors.darkGray
    }
});