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
        // ? Should we do this now?
        <SafeAreaView style={profileStyles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }} >

                {/* Profile picture */}
                <View style={profileStyles.avatarContainer}>
                    <View style={profileStyles.avatarPlaceholder}>
                        <Ionicons name="person" size={56} color={THEME.colors.white} />
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
                            placeholderTextColor={THEME.colors.contrast}
                            value={name}
                            onChangeText={setName} />
                    </View>

                    {/* Email */}
                    <View style={profileStyles.fieldGroup}>
                        <Text style={profileStyles.label}>E-mail:</Text>

                        <TextInput
                            style={profileStyles.input}
                            placeholder="nome@dominio.com"
                            placeholderTextColor={THEME.colors.contrast}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none" />
                    </View>

                    {/* Phone */}
                    <View style={profileStyles.fieldGroup}>
                        <Text style={profileStyles.label}>Telefone:</Text>

                        <TextInput
                            style={profileStyles.input}
                            placeholder="(11) 9XXXX-XXXX"
                            placeholderTextColor={THEME.colors.contrast}
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="phone-pad" />
                    </View>

                    <View style={profileStyles.cardDivider} />

                    {/* Action buttons */}
                    <View style={profileStyles.actionContainer}>

                        {/* Logout button */}
                        <TouchableOpacity
                            style={profileStyles.buttonExit}
                            activeOpacity={0.8}
                            onPress={handleLogout} >

                            <Text style={profileStyles.buttonTextExit}>SAIR</Text>
                        </TouchableOpacity>

                        {/* Settings button */}
                        <TouchableOpacity
                            style={profileStyles.buttonSettings}
                            activeOpacity={0.8} >

                            <Text style={profileStyles.buttonTextSettings}>CONFIGURAÇÕES</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}