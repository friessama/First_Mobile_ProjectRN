import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function AboutPage() {
    return (
        <View>
            <Stack.Screen
                options={{
                title: "About",
                }}
            />
         <Text>Hello from about page</Text>
        </View>
    )
}