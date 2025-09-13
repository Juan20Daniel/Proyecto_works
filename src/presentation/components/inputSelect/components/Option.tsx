import { globalColors } from '@/config/global.styles';
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface Props {
    value:string;
}

export const Option = ({value}:Props) => {
    return (
        <View style={styles.container}>
            {/* <Pressable 
                style={({pressed}) => [
                    styles.btn, 
                    {backgroundColor: pressed ? globalColors.lightGray : undefined}
                ]}
            > */}
                <Text>{value}</Text>
            {/* </Pressable> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
    },
    btn: {
        paddingLeft: 23,
        paddingVertical: 5,
    }
})