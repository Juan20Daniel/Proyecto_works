import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    name: string;
    size?: number;
    color?: string;
}

export const Ionicons = ({name, size=20, color='black'}:Props) => (
    <Icon name={name} size={size} color={color} />
)

