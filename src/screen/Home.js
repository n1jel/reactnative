import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import themes, { getThemeColor } from '../constants/theme';
import { setTheme } from '../redux/userReducer';
function Home({ navigation }) {
    let data = useSelector(state => state)
    console.log("data is", data.theme.theme)
    return (
        <SafeAreaView style={{ backgroundColor: getThemeColor('white', data.theme.theme), flex: 1 }}>
            <View style={{ padding: 15 }}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Setting') }}
                    style={{ backgroundColor: getThemeColor('primary', data.theme.theme), height: 40, width: '40%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Next Page</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ color: getThemeColor('black', data.theme.theme), fontSize: 25, textAlign: 'center', alignSelf: 'center', width: '60%' }}>
                This is an example of dark mode and light mode....
            </Text>
        </SafeAreaView>
    )
}
export default Home;