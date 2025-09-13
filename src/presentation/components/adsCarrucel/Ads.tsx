import { useIsTable } from '@/presentation/hooks/useIsTable';
import { Image, Pressable, StyleSheet } from 'react-native';

interface Props {
    width: number;
    action:() => void;
}

export const Ads = ({width, action}:Props) => {
    const isTable = useIsTable();
    return (
        <Pressable onPress={() => action()}>
            <Image
                source={require('../../../assets/home/imgRegister.jpg')} 
                style={{...styles.img, width:width, height:(width/2)+(isTable?100:50)}}
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    img: {
        height: 250,
        objectFit:'contain',
    },
});