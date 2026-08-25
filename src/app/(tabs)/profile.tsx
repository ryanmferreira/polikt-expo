import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../constants/theme';
import { profileStyles } from '../../styles/profileStyles';

export default function ProfileScreen() {
    const [name, setName] = useState('Ryan Ferreira');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleLogout = () => {
        router.replace('/(auth)');
    };

    return (
        <SafeAreaView style={profileStyles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >

                {/* Foto de Perfil */}
                <View style={profileStyles.avatarContainer}>
                    <View style={profileStyles.avatarPlaceholder}>
                        <Ionicons name="person" size={56} color={THEME.colors.white} />
                    </View>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={profileStyles.avatarText}>FOTO DE PERFIL</Text>
                    </TouchableOpacity>
                </View>

                <View style={profileStyles.mainDivider} />

                {/* Card de Informações */}
                <View style={profileStyles.card}>

                    <View style={profileStyles.fieldGroup}>
                        <Text style={profileStyles.label}>Nome:</Text>
                        <TextInput
                            style={profileStyles.input}
                            placeholder="Nome Sobrenome"
                            placeholderTextColor={THEME.colors.contrast}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

                    <View style={profileStyles.fieldGroup}>
                        <Text style={profileStyles.label}>E-mail:</Text>
                        <TextInput
                            style={profileStyles.input}
                            placeholder="nome@dominio.com"
                            placeholderTextColor={THEME.colors.contrast}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={profileStyles.fieldGroup}>
                        <Text style={profileStyles.label}>Telefone:</Text>
                        <TextInput
                            style={profileStyles.input}
                            placeholder="(11) 9XXXX-XXXX"
                            placeholderTextColor={THEME.colors.contrast}
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={profileStyles.cardDivider} />

                    {/* Container de Botões (Sair / Configurações) */}
                    <View style={profileStyles.actionContainer}>
                        <TouchableOpacity
                            style={profileStyles.buttonExit}
                            activeOpacity={0.8}
                            onPress={handleLogout}
                        >
                            <Text style={profileStyles.buttonTextExit}>SAIR</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={profileStyles.buttonSettings}
                            activeOpacity={0.8}
                        >
                            <Text style={profileStyles.buttonTextSettings}>CONFIGURAÇÕES</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}