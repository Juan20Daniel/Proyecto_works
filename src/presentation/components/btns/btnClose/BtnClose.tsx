import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '../../icon/Ionicons';
interface Props {
    top?: number;
    backTo: () => void; 
}
export const BtnClose = ({top,backTo}:Props) => {
    return (
        <Pressable 
            style={({pressed}) => [
                styles.container,
                {opacity: pressed ? 0.5 : 1, top:top??'auto'}
            ]} 
            onPress={() => backTo()}
        >
            <Ionicons name='close-outline' size={30} color='white' />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        right: 0,
        bottom: 5,
        backgroundColor: 'black',
        width: 40,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        zIndex:2,
    }
})