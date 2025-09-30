import { Pressable, StyleSheet } from 'react-native';
import { globalColors } from '@/config/global.styles'; 
import { Ionicons } from '../../icon/Ionicons';

interface Props {
    name:string;
    top?: number;
    right?: number;
    action:(name:string) => void;
}

export const BtnClearInput = ({name, top, right, action}:Props) => {
    return (
        <Pressable
            style={{...styles.btnClear, top: top??20, right:right??20}} 
            onPress={() =>  action(name)}
        >
            <Ionicons name='close-outline' color={globalColors.gray}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btnClear: {
        position: 'absolute',
        padding: 2,
        zIndex: 2,
        backgroundColor: globalColors.lightGray,
        borderRadius: 15,
        right: 20,
    },
})