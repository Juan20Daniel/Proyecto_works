import { useWindowDimensions } from 'react-native';

export const useIsTablet = () => {
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const isTable = (width > 520 && height > 900);
    return isTable;
}
