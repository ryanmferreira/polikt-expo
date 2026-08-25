import Ionicons from '@react-native-vector-icons/ionicons';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../constants/theme';
import { searchStyles } from '../../styles/searchStyles';

export default function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('noticias');

    const recentSearches = ['Três poderes', 'Município', 'Projeto de Lei'];
    const trendingTopics = ['Política urbana', 'Política urbana', 'Projeto de Lei', 'Transporte', 'Cargos', 'Eleições'];

    return (
        <SafeAreaView style={searchStyles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {/* Cabeçalho */}
                <View style={searchStyles.headerRow}>
                    <Text style={searchStyles.headerTitle}>PESQUISAR</Text>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Ionicons name="notifications" size={26} color={THEME.colors.primary} />
                    </TouchableOpacity>
                </View>
             
                <View style={searchStyles.mainDivider} />

                {/* Input de Pesquisa Padronizado */}
                <Text style={searchStyles.subtitle}>O que você procura?</Text>
             
                <View style={searchStyles.searchContainer}>
                    <TextInput
                        style={searchStyles.searchInput}
                        placeholder="Pesquisar..."
                        placeholderTextColor={THEME.colors.contrast}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
             
                    <Ionicons name="search" size={20} color={THEME.colors.white} />
                </View>

                {/* Abas de Filtro */}
                <View style={searchStyles.filterRow}>
                    <TouchableOpacity
                        style={activeTab === 'noticias' ? searchStyles.filterButtonActive : searchStyles.filterButtonInactive}
                        onPress={() => setActiveTab('noticias')}
                        activeOpacity={0.8}
                    >
                        <Text style={activeTab === 'noticias' ? searchStyles.filterTextActive : searchStyles.filterTextInactive}>
                            Notícias
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={activeTab === 'cursos' ? searchStyles.filterButtonActive : searchStyles.filterButtonInactive}
                        onPress={() => setActiveTab('cursos')}
                        activeOpacity={0.8}
                    >
                        <Text style={activeTab === 'cursos' ? searchStyles.filterTextActive : searchStyles.filterTextInactive}>
                            Cursos
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={activeTab === 'guias' ? searchStyles.filterButtonActive : searchStyles.filterButtonInactive}
                        onPress={() => setActiveTab('guias')}
                        activeOpacity={0.8}
                    >
                        <Text style={activeTab === 'guias' ? searchStyles.filterTextActive : searchStyles.filterTextInactive}>
                            Guias
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Card: Pesquisas Recentes */}
                <View style={searchStyles.card}>
                    <Text style={searchStyles.cardTitle}>PESQUISAS RECENTES</Text>
                
                    <View style={searchStyles.cardDivider} />

                    {recentSearches.map((item, index) => (
                        <View key={index} style={searchStyles.recentSearchItem}>
                            <Text style={searchStyles.recentSearchText}>{item}</Text>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Ionicons name="close" size={20} color={THEME.colors.white} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                {/* Card: Tópicos em Alta */}
                <View style={searchStyles.card}>
                    <Text style={searchStyles.cardTitle}>TÓPICOS EM ALTA</Text>
               
                    <View style={searchStyles.cardDivider} />

                    <View style={searchStyles.topicsGrid}>
                        {trendingTopics.map((topic, index) => (
                            <TouchableOpacity key={index} style={searchStyles.topicCard} activeOpacity={0.7}>
                                <Text style={searchStyles.topicText} numberOfLines={1}>
                                    {topic}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}