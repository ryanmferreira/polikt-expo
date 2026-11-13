import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getErrorMessage } from "@/services/api";
import { loginUser } from "@/services/users";
import { showAlert } from "@/utils/alert";
import { THEME } from "../../constants/theme";
import { authStyles } from "../../styles/authStyles";
import { responsiveStyles } from "../../styles/responsiveStyles";

export default function LoginScreen() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const validMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    setEmailError(email === "" || validMail ? "" : "Digite um e-mail válido.");
    setPasswordError(password === "" || password.length >= 6 ? "" : "A senha deve ter pelo menos 6 caracteres.");
  }, [email, password]);

  const handleLogin = async () => {
    const validMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validPassword = password.length >= 6;

    setEmailError(validMail ? "" : "Digite um e-mail válido.");
    setPasswordError(validPassword ? "" : "A senha deve ter pelo menos 6 caracteres.");

    if (!validMail || !validPassword) {
      return;
    }

    try {
      setLoading(true);
      await loginUser(email, password);
      router.replace("/(tabs)/home");
    } catch (error) {
      showAlert("Erro ao entrar", getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={[authStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={authStyles.buttonText}>Autenticando usuário. Você será redirecionado.</Text>
        <ActivityIndicator size="large" color={THEME.colors.primary} />
      </SafeAreaView>
    );
  }

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
