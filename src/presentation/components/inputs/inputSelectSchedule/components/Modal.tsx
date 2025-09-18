import { useRef, useState } from "react";
import { Modal, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { globalColors } from "@/config/global.styles";
import { BtnIcon } from "@/presentation/components/btns/btnIcon/BtnIcon";
import { useIsTable } from "@/presentation/hooks/useIsTable";
import { SelectScrollItem } from "@/infrestructure/interfaces/select-scroll";
import { SelectScroll } from "./SelectScroll";
interface Props {
    visible: boolean;
    closeModal: () => void;
}

const days:SelectScrollItem[] = [
    {id:0, name:'Lunes'},
    {id:1, name:'Martes'},
    {id:2, name:'Miercoles'},
    {id:3, name:'Jueves'},
    {id:4, name:'Viernes'},
    {id:5, name:'Sábado'},
    {id:6, name:'Domingo'},
]
const hours:SelectScrollItem[] = [
    {id:0, name:'1'},
    {id:1, name:'2'},
    {id:2, name:'3'},
    {id:3, name:'4'},
    {id:4, name:'5'},
    {id:5, name:'6'},
    {id:6, name:'7'},
    {id:7, name:'8'},
    {id:8, name:'9'},
    {id:9, name:'10'},
    {id:10, name:'11'},
    {id:11, name:'12'},
]
const minutes = ():SelectScrollItem[] => {
    // return Array(59).map((_, index) => ({id:index, name:`${index}`}))
}
// const minutes:SelectScrollItem[] = [
//     {id:0, name:'00'},
//     {id:1, name:'1'},
//     {id:2, name:'2'},
//     {id:3, name:'3'},
//     {id:4, name:'4'},
//     {id:5, name:'5'},
//     {id:6, name:'6'},
//     {id:7, name:'7'},
//     {id:8, name:'8'},
//     {id:9, name:'9'},
//     {id:10, name:'10'},
//     {id:11, name:'11'},
// ]
export const BoxModal = ({visible, closeModal}:Props) => {
    const [ from, setFrom ] = useState(0);
    const [ to, setTo ] = useState(0);
    const [ hourStart, setHourStart ] = useState(0);
    const [ hourFinish, setHourFinish ] = useState(0);
    const fromRef = useRef<number|null>(null);
    const toRef = useRef<number|null>(null);
    const hourStartRef = useRef<number|null>(null);
    const hourFinishRef = useRef<number|null>(null);
    const isTable = useIsTable();
    const width = useWindowDimensions().width;
    console.log(minutes());
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
                                fromRef.current = null;
                                toRef.current = null;
                                hourStartRef.current = null;
                                setFrom(0);
                                setTo(0);
                                setHourStart(0);
                                setHourFinish(0);
                            }}
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <SelectScroll 
                            indexCenter={from}
                            list={days}
                            lastIndex={fromRef}
                            setIndexCenter={setFrom}
                        />
                        <SelectScroll 
                            indexCenter={to}
                            list={days}
                            lastIndex={toRef}
                            setIndexCenter={setTo}
                        />
                        <SelectScroll
                            indexCenter={hourStart}
                            list={hours}
                            lastIndex={hourStartRef}
                            width={50}
                            setIndexCenter={setHourStart}
                        />
                        <SelectScroll
                            indexCenter={hourFinish}
                            list={minutes()}
                            lastIndex={hourFinishRef}
                            width={50}
                            setIndexCenter={setHourFinish}
                        />
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
