import { LogOut, Mail, MonitorCog, Moon, Phone, SettingsIcon, Sun, User, UserShield } from "lucide-react-native";

import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { THEME } from "../../constants/theme";

import { User as UserModel } from "@/models/user";

import { clearToken, isLoggedIn } from "@/services/token";
import { getMyProfile } from "@/services/users";

import { profileStyles } from "../../styles/profileStyles";
import { responsiveStyles } from "../../styles/responsiveStyles";

export default function ProfileScreen() {
  const [user, setUser] = useState<UserModel>();

  const [activeTheme, setActiveTheme] = useState("auto");

  const [notification, setNotification] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkLogin();
    loadUser();
  }, []);

  async function handleChangeAppTheme(theme: "auto" | "dark" | "light") {
  }

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
        contentContainerStyle={[{ paddingBottom: 100, gap: THEME.spacing.gap, }, responsiveStyles.formContent]}>

        {/* Whoami */}
        <View style={profileStyles.whoami}>
          {/* Profile picture */}
          <View style={profileStyles.avatarPlaceholder}>
            <User size={56} color={THEME.colors.text} />
          </View>

          {/* Name */}
          <View style={profileStyles.whoamiContainer}>
            <Text style={profileStyles.avatarText}>{user?.name}</Text>
            <View style={profileStyles.profileDivider} />

            {/* Container badges */}
            <View style={profileStyles.whoamiCard}>
              <View style={profileStyles.useRole}>
                <UserShield size={15} color={THEME.colors.textMuted} />
                <Text style={profileStyles.roleText}>Administrador</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Choose theme */}
        <Text style={profileStyles.sectionHeading}>APARÊNCIA</Text>

        <View style={profileStyles.filterRow}>
          <TouchableOpacity
            style={
              activeTheme === "auto" ? profileStyles.filterButtonActive : profileStyles.filterButtonInactive
            }
            onPress={() => { setActiveTheme("auto"); handleChangeAppTheme("auto") }}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityLabel="Tema automático"
            accessibilityState={{ selected: activeTheme === "auto" }}
          >
            <MonitorCog size={15} color={activeTheme === "auto" ? THEME.colors.onPrimary : THEME.colors.primary} />
            <Text style={activeTheme === "auto" ? profileStyles.filterTextActive : profileStyles.filterTextInactive}>Auto</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              activeTheme === "dark" ? profileStyles.filterButtonActive : profileStyles.filterButtonInactive
            }
            onPress={() => { setActiveTheme("dark"); handleChangeAppTheme("dark") }}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityLabel="Tema escuro"
            accessibilityState={{ selected: activeTheme === "dark" }}
          >
            <Moon size={15} color={activeTheme === "dark" ? THEME.colors.onPrimary : THEME.colors.primary} />
            <Text style={activeTheme === "dark" ? profileStyles.filterTextActive : profileStyles.filterTextInactive}>Escuro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              activeTheme === "light" ? profileStyles.filterButtonActive : profileStyles.filterButtonInactive
            }
            onPress={() => { setActiveTheme("light"); handleChangeAppTheme("light") }}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityLabel="Tema claro"
            accessibilityState={{ selected: activeTheme === "light" }}
          >
            <Sun size={15} color={activeTheme === "light" ? THEME.colors.onPrimary : THEME.colors.primary} />
            <Text style={activeTheme === "light" ? profileStyles.filterTextActive : profileStyles.filterTextInactive}>Claro</Text>
          </TouchableOpacity>
        </View>

        <Text style={profileStyles.sectionHeading}>NOTIFICAÇÕES</Text>

        {/* Notification */}
        <View style={profileStyles.notificationCard}>
          <View style={profileStyles.notificationDescription}>
            <Text style={profileStyles.text}>Notificações</Text>
            <Text style={profileStyles.sectionHint}>Disponível em breve</Text>
          </View>
          <Switch
            trackColor={{ false: THEME.colors.surfaceAlt, true: THEME.colors.primary }}
            thumbColor={notification ? THEME.colors.primary : THEME.colors.text}
            value={notification}
            disabled={true}
            onValueChange={setNotification}
          />
        </View>

        <Text style={profileStyles.sectionHeading}>USUÁRIO</Text>

        {/* Account */}
        <View style={[profileStyles.card, profileStyles.formCard]}>
          <Text style={profileStyles.accountHeading}>DADOS DA CONTA</Text>
          <Text style={profileStyles.accountDescription}>
            Informações de contato vinculadas à sua conta.
          </Text>
          <View style={profileStyles.cardDivider} />

          {/* Email */}
          <View style={profileStyles.fieldGroup}>
            <View style={profileStyles.fieldLabelRow}>
              <Mail size={14} color={THEME.colors.primary} />
              <Text style={profileStyles.label}>E-mail</Text>
            </View>

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
            <View style={profileStyles.fieldLabelRow}>
              <Phone size={14} color={THEME.colors.primary} />
              <Text style={profileStyles.label}>Telefone</Text>
            </View>

            <TextInput
              style={profileStyles.input}
              placeholder="(11) 9XXXX-XXXX"
              placeholderTextColor={THEME.colors.textMuted}
              value={user?.phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={profileStyles.actionContainer}>
          {/* Logout button */}
          <TouchableOpacity style={[profileStyles.defaultButton, profileStyles.buttonExit]} activeOpacity={0.8} onPress={handleLogout} accessibilityRole="button">
            <LogOut size={16} color={THEME.colors.onPrimary} />
            <Text style={profileStyles.buttonTextExit}>SAIR</Text>
          </TouchableOpacity>

          {/* Settings button */}
          <TouchableOpacity style={[profileStyles.defaultButton, profileStyles.buttonSettings]} activeOpacity={0.8} accessibilityRole="button">
            <SettingsIcon size={16} color={THEME.colors.text} />
            <Text style={profileStyles.buttonTextSettings}>CONFIGURAÇÕES</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}
