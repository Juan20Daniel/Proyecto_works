import { globalColors } from '@/config/global.styles';
import { InputSelectOption } from '@/infrestructure/interfaces/input-select-option';
import { FlatList, Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { Option } from './Option';

interface Props {
    listOptions:InputSelectOption[];
}

export const ListOptions = ({listOptions}:Props) => {
    return (
        <Pressable style={styles.container}>
            {/* <FlatList 
                data={listOptions}
                keyExtractor={option => option.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <Option key={item.id} value={item.name} />
                )}
            /> */}
            <ScrollView>
                {/* {listOptions.map(option => (
                    <Option key={option.id} value={option.name} />
                ))} */}
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
                <Text>rrrrrrrrrrrrrr</Text>
            </ScrollView>
        </Pressable>
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