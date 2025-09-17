import { globalColors } from '@/config/global.styles';
import { InputSelectOption } from '@/infrestructure/interfaces/input-select-option';
import { ScrollView, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { Option } from './Option';

interface Props {
    opSelectedDefault:string;
    listOptions:InputSelectOption[];
    selectOption:(optionName:string) => void;
}

export const ListOptions = ({opSelectedDefault, listOptions, selectOption}:Props) => {
    
    return (
        <TouchableNativeFeedback accessible={false}>
            <View style={styles.container}>
                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    nestedScrollEnabled={true}
                    keyboardShouldPersistTaps='handled'
                >
                    {listOptions.map(option => (
                        <Option
                            key={option.id} 
                            opSelectedDefault={opSelectedDefault}
                            value={option.name}
                            selectOption={selectOption}
                        />
                    ))}
                </ScrollView>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '100%',
        marginTop: 10,
        backgroundColor: globalColors.white,
        borderWidth: 1,
        borderColor: globalColors.softGray,
        borderRadius: 20,
        zIndex: 1,
        width: '100%',
        maxHeight: 300,
    }
});