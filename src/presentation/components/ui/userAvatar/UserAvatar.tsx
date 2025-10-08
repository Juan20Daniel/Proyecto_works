import { Image, StyleSheet, Text, View } from 'react-native';
import { useIsTablet } from '@/presentation/hooks/useIsTablet';

interface Props {
    isTable?:boolean;
    username: string;
    userImage?:string;
}

export const UserAvatar = ({username, userImage}:Props) => {
    const isTable = useIsTablet();
    return (
        <View style={{
            ...styles.container,
            width:isTable ? 90 : 70, 
            height:isTable ? 90 : 70
        }}>
            {userImage 
                ?   <Image
                        source={require('../../../../assets/user/userImg.jpg')}
                        style={styles.img}
                    />
                :   <Text style={{...styles.text, fontSize:isTable ? 50 : 35}}>
                        {username[0].toUpperCase()}
                    </Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#9A7F20',
        marginRight: 15,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        borderRadius: 35,
        width:'100%', 
        height:'100%',
        objectFit: 'cover'
    },
    text: {
        color: 'white',
        fontSize: 35
    }
});