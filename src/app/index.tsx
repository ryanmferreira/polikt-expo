import { isLoggedIn } from "@/services/token";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function App() {
    const router = useRouter();

    useEffect(() => {
        async function checkAuth() {
            const logged = await isLoggedIn();

            if (logged) {
                router.replace("/(tabs)/home");
            } else {
                router.replace("/(auth)/login");
            }
        }

        checkAuth();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator />
        </View>
    );
}