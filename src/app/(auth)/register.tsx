import { Link, router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../../constants/theme';
import { authStyles } from '../../styles/authStyles';

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleRegister = () => {
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');

        let hasError = false;

        if (name === '') {
            setNameError('Digite seu nome.');
            hasError = true;
        }

        const validMail = /^[^\s@]+@[^\s@]+$/.test(email);
        if (!validMail) {
            setEmailError('Digite um e-mail válido.');
            hasError = true;
        }

        if (password.length < 6) {
            setPasswordError('A senha deve ter pelo menos 6 caracteres.');
            hasError = true;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('As senhas não coincidem.');
            hasError = true;
        }

        if (hasError) {
            return;
        }

        router.replace('/(tabs)/home');
    };

    return (
        <SafeAreaView style={authStyles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: THEME.spacing.gap, paddingBottom: 24 }} >

                {/* Header */}
                <View style={authStyles.headerGroup}>
                    <Text style={authStyles.headerTitle}>BEM-VINDO</Text>
                    <Text style={authStyles.headerSubtitle}>O que gostaria de aprender hoje?</Text>
                </View>

                <View style={authStyles.divider} />

                {/* Card Form */}
                <View style={authStyles.card}>
                    <Text style={authStyles.cardTitle}>CRIAR CONTA</Text>

                    {/* Name */}
                    <View style={authStyles.fieldGroup}>
                        <Text style={authStyles.label}>Nome:</Text>
                        <TextInput
                            style={authStyles.input}
                            placeholder="Nome Sobrenome"
                            placeholderTextColor={THEME.colors.contrast}
                            value={name}
                            onChangeText={setName}
                        />
                        {nameError !== '' && <Text style={authStyles.errorText}>{nameError}</Text>}
                    </View>

                    {/* Email */}
                    <View style={authStyles.fieldGroup}>
                        <Text style={authStyles.label}>E-mail:</Text>
                        <TextInput
                            style={authStyles.input}
                            placeholder="nome@dominio.com"
                            placeholderTextColor={THEME.colors.contrast}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        {emailError !== '' && <Text style={authStyles.errorText}>{emailError}</Text>}
                    </View>

                    {/* Phone */}
                    <View style={authStyles.fieldGroup}>
                        <Text style={authStyles.label}>Telefone:</Text>
                        <TextInput
                            style={authStyles.input}
                            placeholder="(11) 9XXXX-XXXX"
                            placeholderTextColor={THEME.colors.contrast}
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="phone-pad"
                        />
                    </View>

                    {/* Password */}
                    <View style={authStyles.fieldGroup}>
                        <Text style={authStyles.label}>Senha:</Text>
                        <TextInput
                            style={authStyles.input}
                            placeholder="********"
                            placeholderTextColor={THEME.colors.contrast}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        {passwordError !== '' && <Text style={authStyles.errorText}>{passwordError}</Text>}
                    </View>

                    {/* Confirm password */}
                    <View style={authStyles.fieldGroup}>
                        <Text style={authStyles.label}>Repita a senha:</Text>
                        <TextInput
                            style={authStyles.input}
                            placeholder="********"
                            placeholderTextColor={THEME.colors.contrast}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                        />
                        {confirmPasswordError !== '' && <Text style={authStyles.errorText}>{confirmPasswordError}</Text>}
                    </View>

                    {/* Register button */}
                    <TouchableOpacity style={authStyles.button} activeOpacity={0.8} onPress={handleRegister}>
                        <Text style={authStyles.buttonText}>Criar</Text>
                    </TouchableOpacity>

                    <View style={authStyles.cardDivider} />

                    {/* Go to login */}
                    <Link href="/(auth)" asChild>
                        <TouchableOpacity>
                            <Text style={authStyles.linkText}>Já possui conta? Entre aqui!</Text>
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