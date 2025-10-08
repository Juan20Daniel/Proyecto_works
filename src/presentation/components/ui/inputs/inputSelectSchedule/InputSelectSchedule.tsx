import { useState } from 'react';
import { View } from 'react-native';
import { useIsTablet } from '@/presentation/hooks/useIsTablet';
import { BoxModal } from './components/Modal';
import { Label } from '../../label/Label';
import { BtnSelect } from '../../btnSelect.tsx/BtnSelect';

interface Props {
    name: string;
    value: string;
    isFocus:boolean;
    handleChange:(field:string, value:string) => void;
    onFocus:(field:string) => void;
    closeFocus:() => void;
}

export const InputSelectSchedule = ({name, value, isFocus, onFocus, handleChange, closeFocus}:Props) => {
    const [ showModal, setShowModal ] = useState(false);
    const [ schedule, setSchedule ] = useState<Record<string, {index:number, name:string}>>({
        startDay:{index:3, name:''},
        startHour:{index:5, name:''},
        startMinute:{index:30, name:''},
        startTime:{index:0, name:'A.M'},
        finishDay:{index:3, name:''},
        finishHour:{index:5, name:''},
        finishMinute:{index:30, name:''},
        finishTime:{index:1, name:''},
    });
    const isTable = useIsTablet();
    const onChange = (field:string, name:string, index:number) => {
        setSchedule(preState => ({
            ...preState,
            [field]:{index:index, name:name}
        }));
    }
    const handleValue = () => {
        const {startDay, finishDay, finishHour, startHour, startMinute, startTime, finishMinute, finishTime} = schedule;
        const value = `De ${startDay.name} a ${finishDay.name} de ${startHour.name}:${startMinute.name} ${startTime.name} a ${finishHour.name}:${finishMinute.name} ${finishTime.name}`;
        handleChange(name, value);
        closeFocus();
    }
    return (
        <>
            <View style={{width:isTable ? '50%' : '100%', paddingHorizontal:10}}>
                <View style={{flex:1}}>
                    <Label 
                        text='Horario'
                        isFocus={isFocus}
                        statusError={null}
                    />
                    <BtnSelect
                        name={name}
                        placeholder='Seleccionar logo'
                        isFocus={isFocus}
                        value={value}
                        onPress={() => {
                            onFocus(name);
                            setShowModal(!showModal);
                        }}
                    />
                </View>
            </View>
            <BoxModal 
                schedule={schedule}
                visible={showModal}
                handleChange={onChange}
                handleValue={handleValue}
                closeModal={() => {
                    setShowModal(false);
                    onFocus(name);
                    closeFocus();
                }}
            />
        </>
    );
}