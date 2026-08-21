import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    BORDER_RADIUS,
    BORDER_WIDTH,
    BUTTON_PADDING,
    COLORS,
    FONT_SIZE,
    SPACING,
} from '../../constants/theme';

export default function ProfileScreen() {
    const [name, setName] = useState('Nome Sobrenome');
    const [email, setEmail] = useState('nome@dominio.com');
    const [phone, setPhone] = useState('(11) 9XXXX-XXXX');

    const handleLogout = () => {
        router.replace('/login');
    };

    return (
        /* Safe Area View */
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

            {/* Scroll Container */}
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* Profile Header */}
                <View style={styles.profileHeader}>
                    {/* Avatar Container */}
                    <View style={styles.avatarContainer}>
                        <Ionicons name="person" size={64} color={COLORS.textPrimary} />
                    </View>

                    {/* Profile Title Text */}
                    <Text style={styles.profileTitle}>FOTO DE PERFIL</Text>

                    {/* Header Divider */}
                    <View style={styles.headerDivider} />
                </View>

                {/* Name Card Container */}
                <View style={styles.card}>
                    {/* Name Label */}
                    <Text style={styles.label}>Nome:</Text>

                    {/* Name Input */}
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor={COLORS.inputPlaceholder}
                    />
                </View>

                {/* Email and Phone Card Container */}
                <View style={styles.card}>
                    {/* Email Label */}
                    <Text style={styles.label}>E-mail:</Text>

                    {/* Email Input */}
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor={COLORS.inputPlaceholder}
                    />

                    {/* Phone Label */}
                    <Text style={styles.label}>Telefone:</Text>

                    {/* Phone Input */}
                    <TextInput
                        style={styles.input}
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                        placeholderTextColor={COLORS.inputPlaceholder}
                    />
                </View>

                {/* Action Buttons Card Container */}
                <View style={styles.card}>
                    {/* Buttons Row Container */}
                    <View style={styles.buttonRow}>
                        {/* Logout Button */}
                        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} activeOpacity={0.8}>
                            <Text style={styles.buttonText}>SAIR</Text>
                        </TouchableOpacity>

                        {/* Settings Button */}
                        <TouchableOpacity
                            style={styles.settingsButton}
                            onPress={() => router.push('/settings')}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.buttonText}>CONFIGURAÇÕES</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContainer: {
        padding: SPACING.default,
        gap: SPACING.default,
        paddingBottom: 100,
    },
    profileHeader: {
        alignItems: 'center',
        gap: SPACING.sm,
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: COLORS.containerBackground,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.border,
    },
    profileTitle: {
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    headerDivider: {
        height: BORDER_WIDTH.thick,
        backgroundColor: COLORS.primary,
        width: '100%',
        marginTop: SPACING.xs,
    },
    card: {
        backgroundColor: COLORS.containerBackground,
        borderRadius: BORDER_RADIUS.default,
        borderColor: COLORS.border,
        borderWidth: BORDER_WIDTH.thin,
        padding: SPACING.default,
        gap: SPACING.xs,
    },
    label: {
        fontSize: FONT_SIZE.sm,
        fontWeight: 'bold',
        color: COLORS.secondary,
    },
    input: {
        backgroundColor: COLORS.inputBackground,
        color: COLORS.inputText,
        borderRadius: BORDER_RADIUS.default,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        fontSize: FONT_SIZE.sm,
        marginBottom: SPACING.xs,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
    logoutButton: {
        flex: 1,
        backgroundColor: COLORS.danger,
        borderRadius: BORDER_RADIUS.default,
        paddingHorizontal: BUTTON_PADDING.horizontal,
        paddingVertical: BUTTON_PADDING.vertical,
        alignItems: 'center',
    },
    settingsButton: {
        flex: 1,
        backgroundColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.default,
        paddingHorizontal: BUTTON_PADDING.horizontal,
        paddingVertical: BUTTON_PADDING.vertical,
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.textPrimary,
        fontWeight: 'bold',
        fontSize: FONT_SIZE.xs,
    },
});