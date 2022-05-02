import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import themes from '../constants/theme';
import { setTheme } from '../redux/userReducer';
import { useDispatch } from 'react-redux';

export default function Setting({ navigation }) {
    const dispatch = useDispatch();
    const Theme = ({ theme, onPress }) => {
        return (
            Object.keys(theme).map((i) => {
                return (
                    <TouchableOpacity
                        onPress={() => onPress(i)}
                        style={{ backgroundColor: 'black', height: 20, width: 100, margin: 1 }}>
                        <Text style={{ color: 'white' }}>{i}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }
    // const [theme, settheme] = React.useState('light')
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
            <View>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                    style={{ backgroundColor: 'white', height: 40, width: '40%', justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Text>{theme}</Text> */}
                </TouchableOpacity>
                <Theme theme={themes} onPress={(theme) => { dispatch(setTheme(theme)); console.log(theme); }} />
            </View>
        </SafeAreaView>
    )
}