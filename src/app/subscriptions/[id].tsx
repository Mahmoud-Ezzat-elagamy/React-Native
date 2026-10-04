import { Link, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

const SubscriptionsDetails = () => {
    const { id } = useLocalSearchParams()
    return (
        <View>
            <Text>{id}</Text>
            <Link href="/">Go to home</Link>
        </View>
    )
}

export default SubscriptionsDetails