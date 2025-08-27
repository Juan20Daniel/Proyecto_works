import { Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { globalColors, globalStyles } from "../../../config/global.styles";

interface Props {
  title:string;
  label:string;
  children:React.ReactNode;
  action: () => void;
}
export const OfferAction = ({title, label, children, action}:Props) => {
  const width = useWindowDimensions().width;
  const isTable = width>500;
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        {backgroundColor: pressed ? globalColors.lightGray : globalColors.white}
      ]}
      onPress={() => {
        action && action();
      }}
    >
      <View style={styles.content}>
        <Text style={{...styles.title, fontSize:isTable?18:15}}>{title}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical:10,
    paddingHorizontal: 30,
  },
  content: {
    gap: 5
  },
  title: {
    fontFamily: globalStyles.fontMonserratSemiBold,
    fontSize: 18
  },
  label: {
    fontSize: 14,
  }
});