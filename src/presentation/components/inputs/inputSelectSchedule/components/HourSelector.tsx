import React, { SetStateAction } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SelectonScroll } from './SelectonScroll';
import { SelectScrollItem } from '@/infrestructure/interfaces/select-scroll';

interface Props {
    hour: {index:number, name:string};
    hourRef: React.RefObject<number|null>;
    setHour: React.Dispatch<SetStateAction<{index:number, name:string}>>; 
    minute: {index:number, name:string};
    minuteRef: React.RefObject<number|null>;
    setMinute: React.Dispatch<SetStateAction<{index:number, name:string}>>; 
    time: {index:number, name:string};
    timeRef: React.RefObject<number|null>;
    setTime: React.Dispatch<SetStateAction<{index:number, name:string}>>; 
    initiallySelectedOption?:number;
}

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
    const minutes = Array.from({length:59}, (_, i) => i+1)
    .map(minute => ({id:minute, name:`${minute}`}));
    minutes.unshift({id:0, name:'00'});
    return minutes;
}

export const HourSelector = ({
    hour, 
    hourRef, 
    setHour,
    minute,
    minuteRef,
    setMinute,
    time,
    timeRef,
    setTime,
    initiallySelectedOption=0
}:Props) => {
    return (
        <View style={{...styles.row, width:110}}>
            <SelectonScroll
                list={hours}
                indexCenterElement={hour}
                lastIndexCenterElement={hourRef}
                setIndexCenterElement={setHour}
                alignItems="flex-end"
                initiallySelectedOption={5}
                width={25}
                />
            <Text style={{fontSize:18}}>:</Text>
            <SelectonScroll
                list={minutes()}
                indexCenterElement={minute}
                lastIndexCenterElement={minuteRef}
                setIndexCenterElement={setMinute}
                initiallySelectedOption={30}
                width={25}
            />
            <SelectonScroll
                list={[{id:0, name:'A.M'},{id:1, name:'P.M'}]}
                indexCenterElement={time}
                lastIndexCenterElement={timeRef}
                setIndexCenterElement={setTime}
                initiallySelectedOption={initiallySelectedOption}
                width={35}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
    }
});