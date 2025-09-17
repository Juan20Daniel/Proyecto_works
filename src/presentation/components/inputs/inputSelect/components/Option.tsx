import React from 'react';
import { globalColors } from '@/config/global.styles';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
    opSelectedDefault:string;
    value:string;
    selectOption:(optionName:string) => void;
}

export const Option = ({opSelectedDefault, value, selectOption}:Props) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => selectOption(value)}
                style={({pressed}) => [
                    styles.btn, 
                    {backgroundColor: value === opSelectedDefault
                        ?   globalColors.lightGray
                        :   pressed ? globalColors.lightGray : undefined
                    }
                ]}
            >
                <Text>{value}</Text>
            </Pressable>
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
});