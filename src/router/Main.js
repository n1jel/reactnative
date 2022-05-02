import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screen/Home";
import Setting from "../screen/Setting";
function Main() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
    )
}
export default Main;
