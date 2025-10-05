import { Image, StyleSheet } from 'react-native';
import { useIsTablet } from '@/presentation/hooks/useIsTablet';

export const ImgCompany = () => {
    const isTablet = useIsTablet();
    return (
        <Image
            source={require('../../../../../assets/publications/logo2.jpg')}
            style={{
                ...styles.imgCompany,
                width: isTablet ? 170 : 110,
                height: isTablet ? 140 : 80
            }}
        />
    );
}
const styles = StyleSheet.create({
    imgCompany: {
        objectFit:'cover', 
        borderRadius: 15
    }
});