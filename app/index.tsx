
import { View, Text, TextInput, TouchableOpacity, TouchableHighlight, ScrollView } from "react-native";
import { Stack, router } from "expo-router";
import { useEffect, useState } from "react";


export default function App() {


  return (
    <View className="bg-black flex-1 flex flex-col justify-center p-5">
      <Stack.Screen
        options={{
          title: "Home",
          headerTitleStyle: {color: "white"},
          headerStyle: {backgroundColor: "black"},
          headerShown: false,
        }}
      />

      <View className="">
        
        <Text className="text-white text-5xl m-4 mb-8">Log in to my heart 🫶❤️</Text>

        <Text className="text-white px-2 m-4">Username</Text>
        <TextInput
          className="bg-zinc-200 h-20 rounded-xl px-2 flex-col mb-8"
          textAlignVertical="top"
          blurOnSubmit
          placeholderTextColor="gray"
          placeholder="Please enter your name"
          //secureTextEntry
          // onChangeText={(e) => setMyTweet(e)}
        />

        <Text className="text-white px-2 m-4">Password</Text>
        <TextInput
          className="bg-zinc-200 h-20 rounded-xl px-2 flex-col"
          textAlignVertical="top"
          blurOnSubmit
          placeholderTextColor="gray"
          placeholder="Please enter your password"
          secureTextEntry
          // onChangeText={(e) => setMyTweet(e)}
        />

        <View className="flex flex-row justify-center m-6">
          <TouchableOpacity onPress={() => router.push("/tweets/")}>
            <View className="bg-white w-40 rounded-3xl p-6 flex items-center justify-center mt-8">
              <Text className="text-black font-bold">Log in</Text>
            </View>
          </TouchableOpacity>
      </View>

      </View>
    </View>
  );
}
