import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Bell, Clock, MessageSquare, RefreshCw, Search, Settings2, ThumbsUp } from 'lucide-react-native';

import { THEME } from '../../constants/theme';

import { News } from '../../models/news';

import { getAllNews } from '../../services/news';

import { guidesStyles } from '@/styles/guideStyles';
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

    if (error) {
        return (
            <SafeAreaView style={[homeStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{ color: THEME.colors.text, marginBottom: 12 }}>{error}</Text>

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
                contentContainerStyle={{ paddingBottom: 100 }} >

                {/* Header */}
                <View style={homeStyles.headerRow}>
                    <View>
                        <Text style={homeStyles.greetingTitle}>BOM DIA,</Text>
                        <Text style={homeStyles.greetingHighlight}>CIDADÃO!</Text>
                    </View>

                    {/* Notifications icon */}
                    <TouchableOpacity activeOpacity={0.7}>
                        <Bell size={26} color={THEME.colors.primary} />
                    </TouchableOpacity>
                </View>

                <Text style={homeStyles.subtitle}>O que deseja aprender hoje?</Text>

                {/* Search bar */}
                <View style={homeStyles.searchContainer}>
                    <TextInput
                        style={homeStyles.searchInput}
                        placeholder="Pesquisar..."
                        placeholderTextColor={THEME.colors.textMuted}
                        value={search}
                        onChangeText={setSearch} />

                    <Search size={20} color={THEME.colors.text} />
                </View>

                <Text style={homeStyles.sectionTitle}>ÚLTIMAS NOTÍCIAS</Text>
                <View style={homeStyles.sectionDivider} />

                {/* Refresh button */}
                {!loading && (
                    <TouchableOpacity
                        style={guidesStyles.refreshButton}
                        activeOpacity={0.7}
                        onPress={loadNews} >
                        <RefreshCw size={16} color={THEME.colors.primary} />

                        <Text style={guidesStyles.refreshButtonText}>Atualizar</Text>
                    </TouchableOpacity>
                )}

                {loading &&
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 25, }}>
                        {loading && (<ActivityIndicator size="large" color={THEME.colors.primary} style={{ marginTop: 20 }} />)}
                        <Text style={{ color: THEME.colors.text, marginTop: 8, fontSize: 12, }}>Carregando notícias...</Text>
                    </View>
                }

                {/* // ! For each news, show a card */}
                {newsList.map((news) => (
                    <TouchableOpacity
                        key={news.id}
                        onPress={() => router.push(`/news/${news.id}`)} // 
                        activeOpacity={0.8} >

                        <View style={homeStyles.card}>
                            <Image source={{ uri: news.coverImage ?? undefined }} style={homeStyles.cardImage} />

                            <Text style={homeStyles.cardTitle}>{news.title}</Text>

                            <Text style={homeStyles.cardDescription}>{news.description}</Text>

                            <View style={homeStyles.cardDivider} />

                            {/* // TODO: Tags (not implemented yet) :( */}

                            {/* Card footer */}
                            <View style={homeStyles.footerRow}>
                                {/* // TODO: Implement upvotes */}
                                <TouchableOpacity style={homeStyles.iconStat} activeOpacity={0.7}>
                                    <ThumbsUp size={20} color={THEME.colors.text} />
                                    <Text style={homeStyles.statText}>{news.upvotes}</Text>
                                </TouchableOpacity>

                                <View style={homeStyles.iconStat}>
                                    <Clock size={20} color={THEME.colors.textMuted} />
                                    <Text style={homeStyles.statText}>{new Date(news.createdAt).toLocaleDateString('pt-BR')}</Text>
                                </View>

                                {/* // TODO: Implement comments */}
                                <TouchableOpacity style={homeStyles.iconStat} activeOpacity={0.7}>
                                    <MessageSquare size={18} color={THEME.colors.text} />
                                    <Text style={homeStyles.statText}>0</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}

                {/* Explore section */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={homeStyles.sectionTitle}>EXPLORAR</Text>
                    <Settings2 size={22} color={THEME.colors.primary} style={{ marginBottom: 8 }} />
                </View>

                <View style={homeStyles.sectionDivider} />

                {/* // TODO: Implement tags */}
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

                {loading &&
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 25, }}>
                        {loading && (<ActivityIndicator size="large" color={THEME.colors.primary} style={{ marginTop: 20 }} />)}
                        <Text style={{ color: THEME.colors.text, marginTop: 8, fontSize: 12, }}>Carregando notícias...</Text>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    );
}