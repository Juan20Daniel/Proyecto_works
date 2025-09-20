import { useRef, useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { globalColors } from "@/config/global.styles";
import { useIsTable } from "@/presentation/hooks/useIsTable";
import { SelectScrollItem } from "@/infrestructure/interfaces/select-scroll";
import { Header } from "./Header";
import { BtnSave } from "./BtnSave";
import { SelectonScroll } from "./SelectonScroll";
import { HourSelector } from "./HourSelector";
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

export const BoxModal = ({visible, closeModal}:Props) => {
    const [ startDay, setStartDay ] = useState({index:0, name:''});
    const [ startHour, setStartHour ] = useState({index:0, name:''});
    const [ startMinute, setStartMinute ] = useState({index:0, name:''});
    const [ startTime, setStartTime ] = useState({index:0, name:'A.M'});
    
    const [ finisDay, setFinisDay ] = useState({index:0, name:''});
    const [ finishHour, setFinishHour ] = useState({index:0, name:''});
    const [ finisMinute, setFinishMinute ] = useState({index:0, name:''});
    const [ finishTime, setFinishTime ] = useState({index:0, name:''});
    
    const startDayRef = useRef<number|null>(null);
    const startHourRef = useRef<number|null>(null);
    const startMinuteRef = useRef<number|null>(null);
    const startTimeRef = useRef<number|null>(null);
    
    const finishDayRef = useRef<number|null>(null);
    const finishHourRef = useRef<number|null>(null);
    const finishMinuteRef = useRef<number|null>(null);
    const finishTimeRef = useRef<number|null>(null);

    const isTable = useIsTable();
    const clear = () => {
        setStartDay({index:0, name:''});
        setStartHour({index:0, name:''});
        setStartMinute({index:0, name:''});
        setStartTime({index:0, name:'A.M'});
        setFinisDay({index:0, name:''});
        setFinishHour({index:0, name:''});
        setFinishMinute({index:0, name:''});
        setFinishTime({index:0, name:''});
        startDayRef.current = null;
        startHourRef.current = null;
        startMinuteRef.current = null;
        startTimeRef.current = null;
        finishDayRef.current = null;
        finishHourRef.current = null;
        finishMinuteRef.current = null;
    }
    const values = () => {
        const data = {
            startDay,
            startHour,
            startMinute,
            startTime,
            finisDay,
            finishHour,
            finisMinute,
            finishTime,
        }
        console.log(data);
    }
    return (
        <Modal visible={visible} animationType='fade' transparent>
            <View style={styles.container}>
                <View style={{...styles.content, width:isTable ? 500 : 300}}>
                    <Header action={() => {
                        closeModal();
                        clear();
                    }} />
                    <Text style={styles.title}>Selecciona el día y la hora</Text>
                    <View style={isTable ? styles.row : styles.column}>
                        <View style={styles.row}>
                            {!isTable && <Text style={{fontSize:18}}>de</Text>}
                            <SelectonScroll
                                list={days}
                                indexCenterElement={startDay}
                                lastIndexCenterElement={startDayRef}
                                setIndexCenterElement={setStartDay}
                                width={90}
                            />
                            <Text style={{fontSize:18, paddingRight:10}}>a</Text>
                            <SelectonScroll
                                list={days}
                                indexCenterElement={finisDay}
                                lastIndexCenterElement={finishDayRef}
                                setIndexCenterElement={setFinisDay}
                                width={90}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={{fontSize:18}}>de</Text>
                            <HourSelector 
                                hour={startHour}
                                hourRef={startHourRef}
                                setHour={setStartHour}
                                minute={startMinute}
                                minuteRef={startMinuteRef}
                                setMinute={setStartMinute}
                                time={startTime}
                                timeRef={startTimeRef}
                                setTime={setStartTime}
                                initiallySelectedOption={0}
                            />
                            <Text style={{fontSize:18}}>a</Text>
                            <HourSelector 
                                hour={finishHour}
                                hourRef={finishHourRef}
                                setHour={setFinishHour}
                                minute={finisMinute}
                                minuteRef={finishMinuteRef}
                                setMinute={setFinishMinute}
                                time={finishTime}
                                timeRef={finishTimeRef}
                                setTime={setFinishTime}
                                initiallySelectedOption={1}
                            />
                        </View>
                    </View>
                    <BtnSave action={() => {
                        closeModal();
                        values();
                    }} />
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
    row: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between'
    },
    column: {
        flexDirection: 'column', 
    },
    title: {
        paddingBottom:20, 
        fontSize:15
    },
});
