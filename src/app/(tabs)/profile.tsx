import { User } from "lucide-react-native";

import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { THEME } from "../../constants/theme";

import { User as UserModel } from "@/models/user";

import { clearToken, isLoggedIn } from "@/services/token";
import { getMyProfile } from "@/services/users";

import { profileStyles } from "../../styles/profileStyles";
import { responsiveStyles } from "../../styles/responsiveStyles";

export default function ProfileScreen() {
  const [user, setUser] = useState<UserModel>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkLogin();
    loadUser();
  }, []);

  async function checkLogin() {
    if (!isLoggedIn) {
      router.replace("/(auth)/login");
    }
  }

  async function loadUser() {
    try {
      setLoading(true);
      setError(null);
      const userData = await getMyProfile();
      setUser(userData);
    } catch (e) {
      setError("Não foi possível carregar o seu perfil.");
    } finally {
      setLoading(false);
    }
  }

  const handleLogout = () => {
    clearToken();
    router.replace("/(auth)/login");
  };

  if (loading) {
    return (
      <SafeAreaView
        style={[
          profileStyles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color={THEME.colors.primary} />
      </SafeAreaView>
    );
  }

  return (
    // ? Should we do this now?
    <SafeAreaView style={profileStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, responsiveStyles.formContent]}
      >
        {/* Profile picture */}
        <View style={profileStyles.avatarContainer}>
          <View style={profileStyles.avatarPlaceholder}>
            <User size={56} color={THEME.colors.text} />
          </View>

          <TouchableOpacity activeOpacity={0.7}>
            <Text style={profileStyles.avatarText}>FOTO DE PERFIL</Text>
          </TouchableOpacity>
        </View>

        <View style={profileStyles.mainDivider} />

        <View style={profileStyles.card}>
          {/* Name */}
          <View style={profileStyles.fieldGroup}>
            <Text style={profileStyles.label}>Nome:</Text>

            <TextInput
              style={profileStyles.input}
              placeholder="Nome Sobrenome"
              placeholderTextColor={THEME.colors.textMuted}
              value={user?.name}
              onChangeText={setName}
            />
          </View>

          {/* Email */}
          <View style={profileStyles.fieldGroup}>
            <Text style={profileStyles.label}>E-mail:</Text>

            <TextInput
              style={profileStyles.input}
              placeholder="nome@dominio.com"
              placeholderTextColor={THEME.colors.textMuted}
              value={user?.email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Phone */}
          <View style={profileStyles.fieldGroup}>
            <Text style={profileStyles.label}>Telefone:</Text>

            <TextInput
              style={profileStyles.input}
              placeholder="(11) 9XXXX-XXXX"
              placeholderTextColor={THEME.colors.textMuted}
              value={user?.phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>

          <View style={profileStyles.cardDivider} />

          {/* Action buttons */}
          <View style={profileStyles.actionContainer}>
            {/* Logout button */}
            <TouchableOpacity
              style={profileStyles.buttonExit}
              activeOpacity={0.8}
              onPress={handleLogout}
            >
              <Text style={profileStyles.buttonTextExit}>SAIR</Text>
            </TouchableOpacity>

            {/* Settings button */}
            <TouchableOpacity
              style={profileStyles.buttonSettings}
              activeOpacity={0.8}
            >
              <Text style={profileStyles.buttonTextSettings}>
                CONFIGURAÇÕES
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
