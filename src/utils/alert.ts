import { Alert, Platform } from "react-native";

export function showAlert(title: string, message?: string) {
  if (Platform.OS === "web") {
    const text = message ? `${title}\n\n${message}` : title;
    const webAlert = (globalThis as { alert?: (text: string) => void }).alert;

    if (webAlert) {
      webAlert.call(globalThis, text);
    }

    return;
  }

  Alert.alert(title, message);
}
