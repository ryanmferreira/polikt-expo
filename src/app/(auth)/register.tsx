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

    const handleRegister = () => {
        const emailValido = /^[^\s@]+@[^\s@]+$/.test(email);

    if (!emailValido) {
      alert('Digite um e-mail válido.');
      return;
    }
    if (password.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
        if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

        router.replace('/(tabs)/home');
    };

    return (
        <SafeAreaView style={authStyles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: THEME.spacing.gap, paddingBottom: 24 }}
            >
                {/* Header */}
                <View style={authStyles.headerGroup}>
                    <Text style={authStyles.headerTitle}>BEM-VINDO</Text>
                    <Text style={authStyles.headerSubtitle}>
                        O que gostaria de aprender hoje?
                    </Text>
                </View>

                <View style={authStyles.divider} />

                {/* Card Form */}
                <View style={authStyles.card}>
                    <Text style={authStyles.cardTitle}>CRIAR CONTA</Text>

                    <View style={authStyles.fieldGroup}>
                        <Text style={authStyles.label}>Nome:</Text>
                        <TextInput
                            style={authStyles.input}
                            placeholder="Nome Sobrenome"
                            placeholderTextColor={THEME.colors.contrast}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

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
                    </View>

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
                    </View>

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
                    </View>

                    <TouchableOpacity
                        style={authStyles.button}
                        activeOpacity={0.8}
                        onPress={handleRegister}
                    >
                        <Text style={authStyles.buttonText}>Criar</Text>
                    </TouchableOpacity>

                    <View style={authStyles.cardDivider} />

                    <Link href="/(auth)" asChild>
                        <TouchableOpacity>
                            <Text style={authStyles.linkText}>
                                Já possui conta? Entre aqui!
                            </Text>
                        </TouchableOpacity>
                    </Link>

                    <TouchableOpacity>
                        <Text style={authStyles.linkText}>Esqueci a senha</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
