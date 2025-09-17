import { Modal, StyleSheet, Text, useWindowDimensions, View, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { globalColors } from "@/config/global.styles";
import { BtnIcon } from "@/presentation/components/btns/btnIcon/BtnIcon";
import { useIsTable } from "@/presentation/hooks/useIsTable";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
interface Props {
    visible: boolean;
    closeModal: () => void;
}
interface Day {
    id:number;
    name:string
}
const days:Day[] = [
    {id:0, name:'Lunes'},
    {id:1, name:'Martes'},
    {id:2, name:'Miercoles'},
    {id:3, name:'Jueves'},
    {id:4, name:'Viernes'},
    {id:5, name:'Sábado'},
    {id:6, name:'Domingo'},
]
export const BoxModal = ({visible, closeModal}:Props) => {
    const [ centerScroll, setCenterScroll ] = useState(0);
    const isTable = useIsTable();
    const width = useWindowDimensions().width;
    const handleScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
        const {contentOffset} = event.nativeEvent;
        setCenterScroll(Math.floor(Math.ceil(contentOffset.y) / 40));
    }
    return (
        <Modal visible={visible} animationType='fade' transparent>
            <View style={styles.container}>
                <View style={{...styles.content, width:isTable ? 500 : width - 20}}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Horario</Text>
                        <BtnIcon 
                            iconName="close-outline"
                            action={() => {
                                closeModal();
                                setCenterScroll(0)
                            }}
                        />
                    </View>
                    <View style={styles.boxDeys}>
                        <ScrollView 
                            pagingEnabled 
                            snapToInterval={40} 
                            onScroll={handleScroll}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.boxItem}/>
                            <View style={styles.boxItem}/>
                            {days.map((day, index) => (
                                <View style={styles.boxItem} key={index}>
                                    <Text 
                                        style={{
                                            ...styles.items, 
                                            fontSize:day.id === centerScroll ? 20 : 15,
                                            color:day.id === centerScroll
                                                ?   globalColors.black 
                                                :   (day.id+1 === centerScroll || day.id-1 === centerScroll)
                                                    ?   globalColors.softGray
                                                    :   globalColors.lightGray 
                                        }}>
                                        {day.name}
                                    </Text>
                                </View>
                            ))}
                            <View style={styles.boxItem}/>
                            <View style={styles.boxItem}/>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    content: {
        minHeight: 100,
        backgroundColor: globalColors.white,
        padding: 25,
        borderRadius: 20,
    },
    header: {
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    boxDeys: {
        width: 100,
        height: 200,
    },
    boxItem: {
        height: 40, 
        width: '100%', 
      
        justifyContent: 'center'
    },
    items: {
        fontSize: 20,
    }
});
