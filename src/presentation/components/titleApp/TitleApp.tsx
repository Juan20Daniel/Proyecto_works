import React from 'react';
import { Text } from 'react-native';
import { globalColors } from '../../../config/global.styles';

export const TitleApp = () => {
    
    return (
        <Text style={{fontFamily:'Moul-Regular', fontSize: 30}}>
            <Text style={{color:globalColors.azureBlue}}>W</Text>orks
        </Text>
    );
}
