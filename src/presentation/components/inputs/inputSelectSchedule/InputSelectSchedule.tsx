import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { globalColors, globalStyles } from '@/config/global.styles';
import { useIsTable } from '@/presentation/hooks/useIsTable';
import { BtnSelect } from '../../btns/btnSelect.tsx/BtnSelect';
import { Label } from '../../label/Label';
import { BoxModal } from './components/Modal';

interface Props {
    name: string;
    value: string;
    isFocus:boolean;
    onFocus:(field:string) => void;
    onChange?:(value:string, field:string) => void;
}

export const InputSelectSchedule = ({name, value, isFocus, onFocus}:Props) => {
    const [ showModal, setShowModal ] = useState(false);
    const [schedule, setSchedule] = useState({
        startDay:{index:0, name:''},
        startHour:{index:0, name:''},
        startMinute:{index:0, name:''},
        startTime:{index:0, name:''},
        finisDay:{index:0, name:''},
        finishHour:{index:0, name:''},
        finishMinute:{index:0, name:''},
        finishTime:{index:0, name:''},
    });
    const isTable = useIsTable();
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
                visible={showModal}
                closeModal={() => {
                    setShowModal(false);
                    onFocus(name);
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    label: {
        backgroundColor: globalColors.white,
        paddingHorizontal: 3,
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium,
        paddingLeft: 23,
        marginBottom: 10
    }
});