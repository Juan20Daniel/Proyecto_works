import { Pressable, StyleSheet, Text } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { useIsTablet } from '@/presentation/hooks/useIsTablet';

export const BtnEdith = () => {
    const isTable = useIsTablet();
    return (
        <Pressable style={({pressed}) => [
            styles.btnEdit,
            {
                opacity:pressed ? 0.3 : 1,
                paddingHorizontal:isTable ? 20 : 15, 
                paddingVertical:isTable ? 10 :5,
                borderRadius:isTable ? 20 : 10, 
            }
        ]}>
            <Text style={{fontSize:isTable ? 15 : 10}}>Editar</Text>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    btnEdit: {
        backgroundColor:globalColors.lightGray,
        borderRadius:10, 
        marginLeft:5 
    }
});