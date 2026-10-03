import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { loginUser } from "@/services/users";
import { THEME } from "../../constants/theme";
import { authStyles } from "../../styles/authStyles";
import { responsiveStyles } from "../../styles/responsiveStyles";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");

    let hasError = false;

    const validMail = /^[^\s@]+@[^\s@]+$/.test(email);
    if (!validMail) {
      setEmailError("Digite um e-mail válido.");
      hasError = true;
    }

    if (password.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres.");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    if (await loginUser(email, password)) {
      router.replace("/(tabs)/home");
    }
  };

  return (
    <SafeAreaView style={authStyles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          authStyles.scrollContent,
          responsiveStyles.formContent,
        ]}
      >
        {/* Header */}
        <View style={authStyles.headerGroup}>
          <Text style={authStyles.headerTitle}>BEM-VINDO</Text>
          <Text style={authStyles.headerSubtitle}>
            O que gostaria de aprender hoje?
          </Text>
        </View>

        <View style={authStyles.divider} />

        {/* Card */}
        <View style={authStyles.card}>
          <Text style={authStyles.cardTitle}>ENTRAR</Text>

          {/* Mail field */}
          <View style={authStyles.fieldGroup}>
            <Text style={authStyles.label}>E-mail:</Text>
            <TextInput
              style={authStyles.input}
              placeholder="nome@dominio.com"
              placeholderTextColor={THEME.colors.textMuted}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {emailError !== "" && (
              <Text style={authStyles.errorText}>{emailError}</Text>
            )}
          </View>

          {/* Password field */}
          <View style={authStyles.fieldGroup}>
            <Text style={authStyles.label}>Senha:</Text>
            <TextInput
              style={authStyles.input}
              placeholder="********"
              placeholderTextColor={THEME.colors.textMuted}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            {passwordError !== "" && (
              <Text style={authStyles.errorText}>{passwordError}</Text>
            )}
          </View>

          {/* Login button */}
          <TouchableOpacity
            style={authStyles.button}
            activeOpacity={0.8}
            onPress={handleLogin}
          >
            <Text style={authStyles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={authStyles.cardDivider} />

          {/* Create account */}
          <Link href="/(auth)/register" asChild>
            <TouchableOpacity>
              <Text style={authStyles.linkText}>
                Não possui conta? Crie aqui!
              </Text>
            </TouchableOpacity>
          </Link>

          {/* Forgot password */}
          <TouchableOpacity>
            <Text style={authStyles.linkText}>Esqueci a senha</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
