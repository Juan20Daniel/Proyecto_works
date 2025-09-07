import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { globalColors } from '../../../config/global.styles';
import { UserAvatar } from '../userAvatar/UserAvatar';

interface Props {
    username: string;
    email: string;
}

export const UserAccountInformation = ({username, email}:Props) => {
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const isTable = (width > 500 && height > 900);
    return (
        <View style={styles.container}>
            <UserAvatar
                isTable={isTable}
                username={username}
            />
            <View style={{flexDirection:'column', flex:1}}>
                <Text style={{...styles.username, fontSize:isTable ? 20 : 15}} numberOfLines={2}>
                    {username}
                </Text>
                <Text style={{...styles.email, fontSize:isTable ? 18 : 14}} numberOfLines={1}>
                    {email}
                </Text>
            </View>
            <Pressable style={({pressed}) => [
                styles.btnEdit,
                {
                    opacity:pressed ? 0.3 : 1,
                    paddingHorizontal:isTable ? 20 : 15, 
                    paddingVertical:isTable ? 10 :5,
                    borderRadius:isTable ? 20 : 10, 
                }
            ]}>
                <Text style={{...styles.textBtnEdit, fontSize:isTable ? 15 : 10}}>Editar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        paddingHorizontal: 10,
        paddingTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        color: globalColors.black,
        maxWidth:350
    },
    email: {
        color: globalColors.gray,
        maxWidth:350
    },
    btnEdit: {
        backgroundColor:globalColors.lightGray,
        borderRadius:10, 
        marginLeft:5 
    },
    textBtnEdit: {
        
    }
});