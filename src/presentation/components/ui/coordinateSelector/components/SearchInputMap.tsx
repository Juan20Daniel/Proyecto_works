import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { Ionicons } from '../../icon/Ionicons';
import { BtnClearInput } from '../../btnClearInput/BtnClearInput';
import { useIsTablet } from '@/presentation/hooks/useIsTablet';

export const SearchInputMap = () => {
    const [ valueToSearch, setValueToSearch ] = useState('');
    const isTable = useIsTablet();
    return (
        <View style={{paddingHorizontal: isTable ? 30 : 10}}>
            <View style={styles.boxInput}>
                <View style={{...styles.boxIconSearch, width:isTable ? 80 : 50,}}>
                    <Ionicons name='search-outline'size={30} color={globalColors.gray} />
                </View>
                <TextInput 
                    placeholder='Ingresa una dirección'
                    style={{...styles.inputText, paddingLeft: isTable ? 80 : 50,}}
                    value={valueToSearch}
                    onChangeText={setValueToSearch}
                />
                {(valueToSearch !== '') &&
                    <BtnClearInput
                        name='searchInputMap'
                        right={isTable ? 110 : 85}
                        action={() => setValueToSearch('')}
                    />
                }
                <View style={{...styles.boxBtnSearch, width: isTable ? 100 : 80,}}>
                    <Pressable 
                        style={({pressed}) => [
                            styles.btnSearch, 
                            {
                                width: isTable ? 85 : 65,
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
        alignItems:'center',
        justifyContent:'center',
    },
    inputText: {
        borderWidth: 1,
        borderColor: globalColors.softGray,
        height: 60,
        paddingRight: 120,
        borderRadius: 20,
        fontSize: 16,
        zIndex:1,
    },
    boxBtnSearch: {
        position:'absolute',
        right: 0,
        height: 60,
        alignItems:'center',
        justifyContent:'center',
        zIndex: 2,
    },
    btnSearch: {
        height: 45, 
        borderRadius: 13, 
        alignItems:'center',
        justifyContent:'center'
    },
    textBtnSearch: {
        color: globalColors.white
    }
});