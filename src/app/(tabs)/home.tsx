import Ionicons from '@react-native-vector-icons/ionicons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../constants/theme';
import { homeStyles } from '../../styles/homeStyles';

interface NewsItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    upvotes: number;
    comments: number;
}

export default function HomeScreen() {
    const router = useRouter();
    const [search, setSearch] = useState('');

    const newsList: NewsItem[] = [
        {
            id: '123',
            title: 'GOVERNO FEDERAL DEFINE NOVO SALÁRIO MÍNIMO DE 2026',
            description: 'Confira os detalhes das novas alterações na renda do brasileiro em 2026.',
            imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tags: ['ECONOMIA', 'PISO NACIONAL'],
            upvotes: 40,
            comments: 60,
        },
        {
            id: '124',
            title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=600&auto=format&fit=crop',
            tags: ['LOREM', 'IPSUM'],
            upvotes: 25,
            comments: 12,
        },
    ];

    const exploreNews: NewsItem = {
        id: '125',
        title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
        tags: ['LOREM', 'IPSUM'],
        upvotes: 18,
        comments: 9,
    };

    return (
        <SafeAreaView style={homeStyles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >

                {/* --- CABEÇALHO --- */}
                <View style={homeStyles.headerRow}>
                    <View>
                        <Text style={homeStyles.greetingTitle}>BOM DIA,</Text>
                        <Text style={homeStyles.greetingHighlight}>CIDADÃO!</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.7}>
                        <Ionicons name="notifications" size={26} color={THEME.colors.primary} />
                    </TouchableOpacity>
                </View>

                {/* --- BARRA DE PESQUISA --- */}
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

                {/* --- SEÇÃO: ÚLTIMAS NOTÍCIAS --- */}
                <Text style={homeStyles.sectionTitle}>ÚLTIMAS NOTÍCIAS</Text>
                <View style={homeStyles.sectionDivider} />

                {newsList.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => router.push(`/news/${item.id}`)}
                        activeOpacity={0.8}
                    >
                        <View style={homeStyles.card}>
                            <Image
                                source={{ uri: item.imageUrl }}
                                style={homeStyles.cardImage}
                            />

                            <Text style={homeStyles.cardTitle}>{item.title}</Text>
                            <Text style={homeStyles.cardDescription}>{item.description}</Text>

                            <View style={homeStyles.cardDivider} />

                            <View style={homeStyles.tagsContainer}>
                                {item.tags.map((tag, idx) => (
                                    <View key={idx} style={homeStyles.tag}>
                                        <Text style={homeStyles.tagText}>{tag}</Text>
                                    </View>
                                ))}
                            </View>

                            <View style={homeStyles.footerRow}>
                                <TouchableOpacity style={homeStyles.iconStat} activeOpacity={0.7}>
                                    <Ionicons name="arrow-up" size={20} color={THEME.colors.white} />
                                    <Text style={homeStyles.statText}>{item.upvotes}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={homeStyles.iconStat} activeOpacity={0.7}>
                                    <Ionicons name="chatbox" size={18} color={THEME.colors.white} />
                                    <Text style={homeStyles.statText}>{item.comments}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}

                {/* --- SEÇÃO: EXPLORAR --- */}
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

                {/* --- CARD DA SEÇÃO EXPLORAR --- */}
                <TouchableOpacity
                    onPress={() => router.push(`/news/${exploreNews.id}`)}
                    activeOpacity={0.8}
                >
                    <View style={homeStyles.card}>
                        <Image
                            source={{ uri: exploreNews.imageUrl }}
                            style={homeStyles.cardImage}
                        />

                        <Text style={homeStyles.cardTitle}>{exploreNews.title}</Text>

                        <Text style={homeStyles.cardDescription}>{exploreNews.description}</Text>

                        <View style={homeStyles.cardDivider} />

                        <View style={homeStyles.tagsContainer}>
                            {exploreNews.tags.map((tag, idx) => (
                                <View key={idx} style={homeStyles.tag}>
                                    <Text style={homeStyles.tagText}>{tag}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={homeStyles.footerRow}>
                            <TouchableOpacity style={homeStyles.iconStat} activeOpacity={0.7}>
                                <Ionicons name="arrow-up" size={20} color={THEME.colors.white} />
                                <Text style={homeStyles.statText}>{exploreNews.upvotes}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={homeStyles.iconStat} activeOpacity={0.7}>
                                <Ionicons name="chatbox" size={18} color={THEME.colors.white} />
                                <Text style={homeStyles.statText}>{exploreNews.comments}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}