import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '../../icon/Ionicons';
import { globalStyles } from '@/presentation/globalStyles/global.styles';


export const BtnLocation = () => {
    return (
     <View style={{
            paddingHorizontal: 20, 
            height: 35, 
            marginRight: 10,
            marginTop: 10,
            alignItems: 'center', 
            borderRadius: 30,
            backgroundColor: 'white',
            flexDirection: 'row',
            gap:15, 
            ...globalStyles.shadow,
        }}>
            <Text>Colima</Text>
            <Pressable>
                <Ionicons name='close-outline' />
            </Pressable>
        </View>
    )
}
