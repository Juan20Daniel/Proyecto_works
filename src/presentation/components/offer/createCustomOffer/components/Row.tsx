import { View } from "react-native";
import { useIsTablet } from "@/presentation/hooks/useIsTablet";

interface Row {
    children:React.ReactNode;
}

export const Row = ({children}:Row) => {
    const isTablet = useIsTablet();
    return (
        <View style={{
            marginTop: 25,
            width: '100%',
            flexDirection:isTablet ? 'row' : 'column',
            gap: isTablet ? 0 : 25
        }}>
            {children}
        </View>
    );
}