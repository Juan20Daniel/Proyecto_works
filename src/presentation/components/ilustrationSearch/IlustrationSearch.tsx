import { Image, View } from "react-native";

export const IlustrationSearch = () => {
    return (
        <View style={{width: '100%', alignItems: 'center', paddingTop: 100}}>
            <Image
                source={require('../../../assets/search/ilustration.png')}
                style={{width: '70%', objectFit:'contain'}}  
            />
        </View>
    );
}
