import { FlatList, View } from "react-native";
import { Container, HeaderApp, Notification } from "../../components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigators/StackNavigator";

interface Props extends StackScreenProps<RootStackParamList,'Notifications'>{}

export const Notifications = ({navigation}:Props) => {
    return (
        <Container>
            <HeaderApp 
                subText="Noificaciones"
                alignTitle='flex-start'
                actionBtnClose={() => navigation.goBack()}
            />
            <FlatList
                data={[1,2,3,4,5,6,7,8]}
                keyExtractor={(item) => item.toString()}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View style={{width:'100%', height: 5}} />
                )}
                ListFooterComponent={() => (
                    <View style={{width:'100%', height: 100}} />
                )}
                renderItem={({item}) => (
                    <Notification />
                )}
            />
        </Container>
    );
}
