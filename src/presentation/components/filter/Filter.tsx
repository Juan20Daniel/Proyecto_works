import { Dispatch, SetStateAction } from "react";
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { BtnLocationSelecter } from "../locationSelecters/BtnLocationSelecter";
import { globalColors, globalStyles } from "../../../config/global.styles";

interface Props {
    setListLocationModal: Dispatch<SetStateAction<boolean>>;
}

export const Filter = ({setListLocationModal}:Props) => {
    const width = useWindowDimensions().width;
    const isTable = width > 500;
    return (
        <>
            <View style={{...styles.container, height:isTable? 120 : 90,}}>
                <Text style={[styles.note, isTable && styles.noteTable]}>
                    Mira las ofertas de trabajo que tiene tu ciudad
                </Text>
                <BtnLocationSelecter action={() => setListLocationModal(true)}/>
            </View>  
            <View style={styles.boxFiltersSelected} >
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{height:30, width:15,}} />
                    <View style={{ height: 30, justifyContent:'center', paddingHorizontal: 15, borderRadius:15, marginTop:5, marginRight:10, borderWidth:1, borderColor:globalColors.lightGray}}>
                        <Text>Colima, Manzanillo</Text>
                    </View>
                     <View style={{ height: 30, justifyContent:'center', paddingHorizontal: 15, borderRadius:15, marginTop:5, marginRight:10, borderWidth:1, borderColor:globalColors.lightGray}}>
                        <Text>Colima, Manzanillo</Text>
                    </View>
                     <View style={{ height: 30, justifyContent:'center', paddingHorizontal: 15, borderRadius:15, marginTop:5, marginRight:10, borderWidth:1, borderColor:globalColors.lightGray}}>
                        <Text>Colima, Manzanillo</Text>
                    </View>
                     <View style={{ height: 30, justifyContent:'center', paddingHorizontal: 15, borderRadius:15, marginTop:5, marginRight:10, borderWidth:1, borderColor:globalColors.lightGray}}>
                        <Text>Colima, Manzanillo</Text>
                    </View>
                     <View style={{ height: 30, justifyContent:'center', paddingHorizontal: 15, borderRadius:15, marginTop:5, marginRight:10, borderWidth:1, borderColor:globalColors.lightGray}}>
                        <Text>Colima, Manzanillo</Text>
                    </View>
                    <View style={{height:30, width:5,}} />
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',  
    },
    note: {
        fontFamily:globalStyles.fontMonserratMedium, 
        paddingHorizontal: 10, 
        textAlign: 'center',
        marginTop: 10,
        marginHorizontal: 'auto',
        color: 'black',
        fontSize: 16,
        width: 320,
    },
    noteTable: {
        marginTop: 20,
        width: 420,
        fontSize: 25
    },
    boxFiltersSelected: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',  
        width: '100%',
        paddingTop: 30,
        height: 75,
    }
});