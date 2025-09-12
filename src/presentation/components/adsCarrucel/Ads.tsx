import { Image, Pressable, StyleSheet } from 'react-native';

interface Props {
    width: number;
    action:() => void;
}

export const Ads = ({width, action}:Props) => (
    <Pressable onPress={() => action()}>
        <Image
            source={require('../../../assets/home/imgRegister.jpg')} 
            style={{...styles.img, width:width,}}
        />
    </Pressable>
);

const styles = StyleSheet.create({
    img: {
        height: '100%',
        objectFit:'contain',
    },
});