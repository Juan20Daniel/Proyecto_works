import { Image, StyleSheet, Text, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface Props {
    username: string;
    userImage?:string;
}

export const UserAvatar = ({username, userImage}:Props) => {
    return (
        <SkeletonPlaceholder speed={1500}>
          
            <SkeletonPlaceholder.Item 
                width={70} 
                height={60} 
                borderRadius={35} 
            />
            
        </SkeletonPlaceholder>
        // <View style={styles.container}>
        //     {userImage 
        //         ?   <Image
        //                 source={require('../../../assets/user/userImg.jpg')}
        //                 style={styles.img}
        //             />
        //         :   <Text style={styles.text}>{username[0].toUpperCase()}</Text>}
        // </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: 70,
        height: 70,
        backgroundColor: '#9A7F20',
        marginRight: 15,
        borderRadius: 35,
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
})