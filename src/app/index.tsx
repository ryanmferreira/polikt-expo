import { isLoggedIn } from "@/services/token";
import { THEME } from "@/constants/theme";
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
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: THEME.colors.background }}>
            <ActivityIndicator color={THEME.colors.primary} />
        </View>
    );
}