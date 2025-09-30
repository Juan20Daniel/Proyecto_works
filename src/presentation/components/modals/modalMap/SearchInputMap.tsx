import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { globalColors } from '@/config/global.styles';
import { Ionicons } from '../../icon/Ionicons';
import { BtnClearInput } from '../../btns/btnClearInput/BtnClearInput';

export const SearchInputMap = () => {
    const [ valueToSearch, setValueToSearch ] = useState('');
    return (
        <View style={{paddingHorizontal: 30}}>
            <View style={styles.boxInput}>
                <View style={styles.boxIconSearch}>
                    <Ionicons name='search-outline'size={30} color={globalColors.gray} />
                </View>
                <TextInput 
                    placeholder='Ingresa una dirección'
                    style={styles.inputText}
                    value={valueToSearch}
                    onChangeText={setValueToSearch}
                />
                {(valueToSearch !== '') &&
                    <BtnClearInput
                        name='searchInputMap'
                        right={110}
                        action={() => setValueToSearch('')}
                    />
                }
                <View style={styles.boxBtnSearch}>
                    <Pressable 
                        style={({pressed}) => [
                            styles.btnSearch, 
                            {
                                opacity: (valueToSearch.length < 3) 
                                    ?   1
                                    :   pressed ? 0.5 : 1,
                                backgroundColor: (valueToSearch.length < 3) 
                                    ?   globalColors.softGray
                                    :   globalColors.azureBlue,
                            }
                        ]}>
                        <Text style={styles.textBtnSearch}>Buscar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    boxInput: {
        position:'relative',
        justifyContent:'center'
    },
    boxIconSearch: {
        position:'absolute',
        height: 60,
        width:80,
        alignItems:'center',
        justifyContent:'center'
    },
    inputText: {
        borderWidth: 1,
        borderColor: globalColors.softGray,
        height: 60,
        paddingLeft: 80,
        paddingRight: 140,
        borderRadius: 20,
        fontSize: 16,
        zIndex:1,
    },
    boxBtnSearch: {
        position:'absolute',
        right: 0,
        width: 100,
        height: 60,
        alignItems:'center',
        justifyContent:'center',
        zIndex: 2,
    },
    btnSearch: {
        width: 85, 
        height: 45, 
        borderRadius: 13, 
        alignItems:'center',
        justifyContent:'center'
    },
    textBtnSearch: {
        color: globalColors.white
    }
});