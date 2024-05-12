import TweetBox from "@/components/tweetbox";
import { View, Text, TextInput, TouchableOpacity, TouchableHighlight, ScrollView } from "react-native";
import { Stack, router } from "expo-router";
import { useEffect, useState } from "react";

//h1..h6,p,span => Text
//div => View

export type TData = 
  {
    id: string;
    name: string;
    username: string;
    photoURL: string;
    content: string;
    createdAt: string;
    data: {
      likes: number;
      reposts: number;
      comments: number;
    }
  }


export default function App() {

  const [ myTweet, setMyTweet ] = useState("");

  const [ FetchedData, setFetchedData ] = useState([]);

  async function fetchData() {
    const response = await fetch("https://workshop.elyasasmad.com/posts");
    const data = await response.json();

    setFetchedData(data);

    return data;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View className="bg-black flex-1">
      <Stack.Screen
        options={{
          title: "Home",
          headerTitleStyle: {color: "white"},
          headerStyle: {backgroundColor: "black"},
        }}
      />
      <View className="p-5">
      <TextInput 
        className="bg-zinc-500 h-32 rounded-xl px-2"
        multiline
        textAlignVertical="top"
        blurOnSubmit
        placeholder="Typing..."
        secureTextEntry
        onChangeText={(e) => setMyTweet(e)}
      />
      </View>

      <View className="flex flex-row justify-between mx-5">
      <TouchableOpacity onPress={() => console.log(myTweet)}>
        <View className="bg-blue-600 w-24 rounded-xl p-3 flex items-center justify-center">
          <Text className="text-white font-bold">Tweet</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/about/")}>
        <View className="bg-blue-600 w-24 rounded-xl p-3 flex items-center justify-center">
          <Text className="text-white font-bold">About Screen</Text>
        </View>
      </TouchableOpacity>
      </View>
      

      <ScrollView>
        {FetchedData.map((tweet: TData) => (
            <TweetBox {... tweet} key={tweet.id} />
        ))}
      </ScrollView>
    </View>
  );
}