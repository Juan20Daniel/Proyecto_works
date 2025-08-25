import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '../icon/Ionicons';
import { globalColors, globalStyles } from '../../../config/global.styles';

interface Props {
    action:() => void;
}

export const AvailableJobSelector = ({action}:Props) => {
    return (
        <Pressable 
            style={({pressed}) => [
                styles.container,
                {opacity: pressed ? 0.6 : 1}
            ]}
            onPress={() => {
                action && action();
            }}
        >
            <View style={styles.boxLabel}>
                <Ionicons name='search-outline' color={globalColors.softGray} size={25} />
                <Text style={styles.label}>Trabajos disponibles</Text>
            </View>
            <Ionicons name='chevron-down-outline' />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%',
        maxWidth: 500,
        height: 60,
        borderRadius: 20,
        backgroundColor: globalColors.white,
        ...globalStyles.shadow,
    },
    boxLabel: {
        flexDirection: 'row',
        gap: 20,
    },
    label: {
        color:globalColors.softGray,
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 16
    }
})