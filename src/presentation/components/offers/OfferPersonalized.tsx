import { Image, StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '../../../config/global.styles';
import { Container } from './Container';

export const OfferPersonalized = () => {
    return (
       <Container>
            <View style={styles.boxOffer}>
                <Image 
                    source={require('../../../assets/publications/logoIndustry.png')}
                    style={styles.companyLogo}
                />
                <Text style={styles.titleJop}>Chofer de camión</Text>
                <Text style={styles.descriptionJop}>
                    Descripción: Empleo dedicado al transporte de personal de las distintas áreas que conforman la empresa People.
                </Text>
                <Text style={styles.workSchedule}>Horario: Lunes a viernes</Text>
                <Text style={styles.workSchedule}>8:00 am - 5:00 pm</Text>
                
                <Text style={styles.titleSalary}>Sueldo</Text>
                <Text style={styles.salary}>$4000 a 6000 mensual</Text>
                <Text style={styles.publicationDate}>Fecha de publicación: 10/08/2025</Text>
            </View>
       </Container>
    );
}

const styles = StyleSheet.create({
    boxOffer: {
        width: '100%',
        paddingTop: 60,
        paddingBottom: 70,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        alignItems: 'center',
        ...globalStyles.shadow
    },
    companyLogo: {
        width: 150,
        height: 150,
        objectFit: 'contain',
    },
    titleJop: {
        paddingTop:30, 
        fontSize: 25,
        textAlign: 'center',
        fontFamily: globalStyles.fontMonserratMedium,
        marginHorizontal: 20
    },
    descriptionJop: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        paddingBottom: 30,
        color: globalColors.darkGray,
    },
    workSchedule: {
        fontSize: 12
    },
    titleSalary: {
        marginTop: 20,
        fontSize: 16,
    },
    salary: {
        marginTop: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 30,
        fontSize: 18,
    },
    publicationDate: {
        fontSize: 10,
        marginTop: 30,
        color: globalColors.darkGray
    }
});