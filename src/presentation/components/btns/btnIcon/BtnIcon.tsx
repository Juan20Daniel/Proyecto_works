import { Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '../../icon/Ionicons'
import { globalColors } from '../../../../config/global.styles';

interface Props {
    iconName: string;
    iconColor?: string;
    marginRight?: number;
    borderColor?: string;
    action: () => void;
}

export const BtnIcon = ({iconName, iconColor, marginRight, borderColor='white', action}:Props) => {
    return (
        <Pressable 
            onPress={() => {
                action && action();
            }}
            style={({pressed}) => [
                styles.container,
                {
                    marginRight:marginRight??0,
                    borderColor: pressed 
                        ? globalColors.softGray 
                        : 'rgba(0,0,0,0.0)'
                }
                
            ]}
        >
            <Ionicons name={iconName} color={iconColor}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth:1,
    }
})