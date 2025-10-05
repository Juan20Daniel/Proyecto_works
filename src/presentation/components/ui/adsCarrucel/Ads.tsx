import { Image, Pressable, StyleSheet } from 'react-native';
import { useIsTablet } from '@/presentation/hooks/useIsTablet';

interface Props {
    width: number;
    action:() => void;
}

export const Ads = ({width, action}:Props) => {
    const isTablet = useIsTablet();
    return (
        <Pressable onPress={() => action()}>
            <Image
                source={require('../../../assets/home/imgRegister.jpg')} 
                style={{...styles.img, width:width, height:(width/2)+(isTablet?100:50)}}
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