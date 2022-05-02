import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import themes, { getThemeColor } from '../constants/theme';
import { setTheme } from '../redux/userReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function Setting({ navigation }) {
    const data = useSelector(state => state)
    console.log('data is ', data.theme.theme);
    const dispatch = useDispatch();
    const Theme = ({ theme, onPress }) => {
        return (
            <ScrollView
                horizontal
            >
                {
                    Object.keys(theme).map((i) => {
                        return (
                            <TouchableOpacity
                                onPress={() => onPress(i)}
                                style={{ backgroundColor: getThemeColor('black', data.theme.theme), height: 50, width: 50, borderRadius: 10, margin: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: getThemeColor('white', data.theme.theme) }}>{i}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: getThemeColor('white', data.theme.theme) }}>
            <View style={{ padding: 15 }}>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                    style={{ backgroundColor: getThemeColor('black', data.theme.theme), borderRadius: 5, height: 30, width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: getThemeColor('white', data.theme.theme) }}>Go Back</Text>
                </TouchableOpacity>
                <Theme theme={themes} onPress={(theme) => { dispatch(setTheme(theme)); console.log(theme); }} />
            </View>
        </SafeAreaView>
    )
}