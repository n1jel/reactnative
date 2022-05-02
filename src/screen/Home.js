import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import themes, { getThemeColor } from '../constants/theme';
import { setTheme } from '../redux/userReducer';
function Home({ navigation }) {
    // const t = getThemeColor('white', theme);
    let data = useSelector(state => state)
    console.log("data is", data.theme.theme)
    return (
        <SafeAreaView style={{ backgroundColor: getThemeColor('white', data.theme.theme), flex: 1 }}>
            <View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Setting') }}
                    style={{ backgroundColor: 'red', height: 40, width: '40%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Next Page</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
// StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: getThemeColor('white', theme),
//     },
// });
export default Home;