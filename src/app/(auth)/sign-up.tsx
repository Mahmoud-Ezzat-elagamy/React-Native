import { Link } from "expo-router";
import { Text, View } from "react-native";
import SignIn from "./sign-in";

const SignUp = () => {
    return (
        <View>
            <Text>Sign Up</Text>
            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">
                Go to Sign Up
            </Link>
            <Link href="/">Go to Home</Link>
        </View>
    );
};

export default SignUp;