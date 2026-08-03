import { router } from 'expo-router';
import { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
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
} from '../constants/theme';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        router.replace('/(tabs)');
    };

    return (
        /* Safe Area View */
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.loginBackground} />

            {/* Keyboard Avoiding Container */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                {/* Scroll Container */}
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.welcomeText}>BEM-VINDO</Text>
                        <Text style={styles.subtitleText}>O que gostaria de aprender hoje?</Text>
                        <View style={styles.headerDivider} />
                    </View>

                    {/* Card Component */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>ENTRAR</Text>

                        {/* Email Label */}
                        <Text style={styles.label}>E-mail:</Text>

                        {/* Email Input */}
                        <TextInput
                            style={styles.input}
                            placeholder="nome@dominio.com"
                            placeholderTextColor={COLORS.inputPlaceholder}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        {/* Password Label */}
                        <Text style={styles.label}>Senha:</Text>

                        {/* Password Input */}
                        <TextInput
                            style={styles.input}
                            placeholder="********"
                            placeholderTextColor={COLORS.inputPlaceholder}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />

                        {/* Submit Button */}
                        <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.8}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>

                        {/* Card Divider */}
                        <View style={styles.cardDivider} />

                        {/* Signup Link */}
                        <TouchableOpacity onPress={() => router.push('/signup')}>
                            <Text style={styles.linkText}>Não possui conta? Crie aqui!</Text>
                        </TouchableOpacity>

                        {/* Forgot Password Link */}
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={styles.linkText}>Esqueci a senha</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.loginBackground,
    },
    keyboardView: {
        flex: 1,
    },
    scrollContainer: {
        padding: SPACING.default,
        gap: SPACING.default,
    },
    header: {
        gap: SPACING.xs,
    },
    welcomeText: {
        fontSize: FONT_SIZE.xl,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    subtitleText: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textPrimary,
    },
    headerDivider: {
        height: BORDER_WIDTH.thick,
        backgroundColor: COLORS.primary,
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
    cardTitle: {
        fontSize: FONT_SIZE.xl,
        fontWeight: 'bold',
        color: COLORS.primary,
        marginBottom: SPACING.md,
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
        marginBottom: SPACING.sm,
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.default,
        paddingHorizontal: BUTTON_PADDING.horizontal,
        paddingVertical: BUTTON_PADDING.vertical,
        alignItems: 'center',
        marginTop: SPACING.xs,
    },
    buttonText: {
        color: COLORS.textPrimary,
        fontWeight: 'bold',
        fontSize: FONT_SIZE.md,
    },
    cardDivider: {
        height: BORDER_WIDTH.thin,
        backgroundColor: COLORS.border,
        marginVertical: SPACING.sm,
    },
    linkText: {
        color: COLORS.secondary,
        fontSize: FONT_SIZE.sm,
    },
});