import { StyleSheet, View } from 'react-native';
import { globalColors } from '../../../config/global.styles';

interface Props {
    state:boolean;
}

export const Switch = ({state}:Props) => {
    return (
        <View 
            style={{
                ...styles.container, 
                backgroundColor:state ? globalColors.limeGreen : globalColors.softGray, 
                alignItems:state? 'flex-end' : 'flex-start'
            }}
        >
            <View style={styles.ball} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 50,
        padding: 4,
        width:50, 
        height:25,
    },
    ball: {
        backgroundColor: globalColors.white,
        width: 17,
        height: 17,
        borderRadius:15
    }
});