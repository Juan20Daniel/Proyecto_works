import React from 'react';
import { globalColors } from '@/config/global.styles';
import { Text } from 'react-native';

export const TitleApp = () => {
    
    return (
        <Text style={{fontFamily:'Moul-Regular', fontSize: 30}}>
            <Text style={{color:globalColors.azureBlue}}>W</Text>orks
        </Text>
    );
}
