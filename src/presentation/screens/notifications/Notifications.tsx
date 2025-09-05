import { useState } from "react";
import { FlatList, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Container, HeaderApp, Notification, NotificationOptionsModal } from "../../components";
import { RootStackParamList } from "../../navigators/StackNavigator";

interface Props extends StackScreenProps<RootStackParamList,'Notifications'>{}

export const Notifications = ({navigation}:Props) => {
    const [ showNotificationOptions, setShowNotificationOptions ] = useState(false);
    return (
        <>
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
                        <Notification
                            openNotificationOptions={() => setShowNotificationOptions(!showNotificationOptions)}
                        />
                    )}
                />
            </Container>
            <NotificationOptionsModal 
                visible={showNotificationOptions}
                closeOptions={() => setShowNotificationOptions(!showNotificationOptions)}
            />
        </>
    );
}