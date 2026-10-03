import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const TOKEN_KEY = 'token';

const isWeb = Platform.OS === 'web';

export async function setToken(token: string): Promise<void> {
    if (isWeb) {
        await AsyncStorage.setItem(TOKEN_KEY, token);
    } else {
        await SecureStore.setItemAsync(TOKEN_KEY, token);
    }
}

export async function getToken(): Promise<string | null> {
    if (isWeb) {
        return await AsyncStorage.getItem(TOKEN_KEY);
    }

    return await SecureStore.getItemAsync(TOKEN_KEY);
}

export async function clearToken(): Promise<void> {
    if (isWeb) {
        await AsyncStorage.removeItem(TOKEN_KEY);
    } else {
        await SecureStore.deleteItemAsync(TOKEN_KEY);
    }
}

export async function isLoggedIn(): Promise<boolean> {
    const token = await getToken();

    return token !== null;
}