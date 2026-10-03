import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl px-2 font-bold text-blue-500">
        Welcome to Nativewind! hey I think i am losing my mind now sd
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4"> go to onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4"> go to Sign In</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4"> go to Sign Up</Link>

      <Link href="/subscriptions/spotify" className="mt-4 rounded bg-primary text-white p-4"> go to subscription spotify</Link>
      <Link href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }} className="mt-4 rounded bg-primary text-white p-4"> go to subscription claude</Link>
    </View>
  );
}
