import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from 'nativewind'
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl px-2 font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4"> go to onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4"> go to Sign In</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4"> go to Sign Up</Link>

      <Link href="/subscriptions/spotify" className="mt-4 rounded bg-primary text-white p-4"> go to subscription spotify</Link>
      <Link href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }} className="mt-4 rounded bg-primary text-white p-4"> go to subscription claude</Link>
    </SafeAreaView>
  );
}
