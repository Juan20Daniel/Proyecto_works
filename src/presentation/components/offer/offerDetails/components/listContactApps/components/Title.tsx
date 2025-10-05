import { Text } from 'react-native'
import { useIsTablet } from '@/presentation/hooks/useIsTablet';

export const Title = () => {
    const isTablet = useIsTablet();
    return (
        <Text style={{paddingBottom: 10, fontSize: isTablet ? 25 : 18}}>
            Apps de contacto
        </Text>
    );
}
