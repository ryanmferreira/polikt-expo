import Ionicons from '@react-native-vector-icons/ionicons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../constants/theme';
import { News } from '../../models/news';
import { getAllNews } from '../../services/news';
import { homeStyles } from '../../styles/homeStyles';

export default function HomeScreen() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [newsList, setNewsList] = useState<News[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadNews();
    }, []);

    async function loadNews() {
        try {
            setLoading(true);
            setError(null);
            const data = await getAllNews();
            setNewsList(data);
        } catch (e) {
            setError('Não foi possível buscar as notícias. Por favor, tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <SafeAreaView style={[homeStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color={THEME.colors.primary} />
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={[homeStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{ color: THEME.colors.white, marginBottom: 12 }}>{error}</Text>
                <TouchableOpacity onPress={loadNews}>
                    <Text style={{ color: THEME.colors.primary }}>Tentar novamente</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={homeStyles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <View style={homeStyles.headerRow}>
                    <View>
                        <Text style={homeStyles.greetingTitle}>BOM DIA,</Text>
                        <Text style={homeStyles.greetingHighlight}>CIDADÃO!</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Ionicons name="notifications" size={26} color={THEME.colors.primary} />
                    </TouchableOpacity>
                </View>

                <Text style={homeStyles.subtitle}>O que deseja aprender hoje?</Text>
                <View style={homeStyles.searchContainer}>
                    <TextInput
                        style={homeStyles.searchInput}
                        placeholder="Pesquisar..."
                        placeholderTextColor={THEME.colors.contrast}
                        value={search}
                        onChangeText={setSearch}
                    />
                    <Ionicons name="search" size={20} color={THEME.colors.white} />
                </View>

                <Text style={homeStyles.sectionTitle}>ÚLTIMAS NOTÍCIAS</Text>
                <View style={homeStyles.sectionDivider} />

                {newsList.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => router.push(`/news/${item.id}`)}
                        activeOpacity={0.8}>
                        <View style={homeStyles.card}>
                            <Image
                                source={{ uri: item.coverImage || 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original' }}
                                style={homeStyles.cardImage}
                            />
                            <Text style={homeStyles.cardTitle}>{item.title}</Text>
                            <Text style={homeStyles.cardDescription}>{item.description}</Text>
                            <View style={homeStyles.cardDivider} />
                            {/* Tags de notícia ainda não existem no backend — bloco mantido sem dados por enquanto */}
                            <View style={homeStyles.footerRow}>
                                <TouchableOpacity style={homeStyles.iconStat} activeOpacity={0.7}>
                                    <Ionicons name="arrow-up" size={20} color={THEME.colors.white} />
                                    <Text style={homeStyles.statText}>{item.upvotes}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={homeStyles.iconStat} activeOpacity={0.7}>
                                    <Ionicons name="chatbox" size={18} color={THEME.colors.white} />
                                    <Text style={homeStyles.statText}>0</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}

                {/* --- SEÇÃO: EXPLORAR (restaurada, ainda estática) --- */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={homeStyles.sectionTitle}>EXPLORAR</Text>
                    <Ionicons name="options" size={22} color={THEME.colors.primary} style={{ marginBottom: 8 }} />
                </View>
                <View style={homeStyles.sectionDivider} />
                <View style={homeStyles.tagsContainer}>
                    <TouchableOpacity style={homeStyles.tag} activeOpacity={0.8}>
                        <Text style={homeStyles.tagText}>VER TODOS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={homeStyles.tag} activeOpacity={0.8}>
                        <Text style={homeStyles.tagText}>GOVERNANÇA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={homeStyles.tag} activeOpacity={0.8}>
                        <Text style={homeStyles.tagText}>ELEITORAL</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}