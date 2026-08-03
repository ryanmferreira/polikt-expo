import Ionicons from '@react-native-vector-icons/ionicons';
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

export default function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState<'news' | 'courses' | 'guides'>('news');

    const trendingTopics = [
        'Política urbana',
        'Política urbana',
        'Projeto de Lei',
        'Transporte',
        'Cargos',
        'Eleições',
    ];

    const recentSearches = ['Três poderes', 'Município', 'Projeto de Lei'];

    return (
        /* Safe Area View */
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

            {/* Scroll Container */}
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* Header Container */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>PESQUISAR</Text>

                    {/* Notification Button */}
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="notifications" size={26} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>

                {/* Header Divider */}
                <View style={styles.headerDivider} />

                {/* Subtitle Text */}
                <Text style={styles.subtitle}>O que você procura?</Text>

                {/* Search Bar Input */}
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Pesquisar..."
                        placeholderTextColor={COLORS.secondary}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <Ionicons name="search" size={20} color={COLORS.secondary} />
                </View>

                {/* Filter Tabs Container */}
                <View style={styles.tabsContainer}>
                    {/* News Tab Button */}

                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'news' ? styles.activeTabButton : styles.inactiveTabButton,]}
                        onPress={() => setActiveTab('news')} activeOpacity={0.8}>
                        <Text style={[styles.tabButtonText, activeTab === 'news' ? styles.activeTabText : styles.inactiveTabText,]}
                        >Notícias</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'guides' ? styles.activeTabButton : styles.inactiveTabButton,]}
                        onPress={() => setActiveTab('guides')} activeOpacity={0.8} >
                        <Text style={[styles.tabButtonText, activeTab === 'guides' ? styles.activeTabText : styles.inactiveTabText,]}
                        >Guias</Text>
                    </TouchableOpacity>

                    {/* Courses Tab Button */}
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'courses' ? styles.activeTabButton : styles.inactiveTabButton,]}
                        onPress={() => setActiveTab('courses')} activeOpacity={0.8}  >
                        <Text
                            style={[styles.tabButtonText, activeTab === 'courses' ? styles.activeTabText : styles.inactiveTabText,]}>
                            Cursos
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Trending Topics Card */}
                <View style={styles.card}>
                    {/* Card Title */}
                    <Text style={styles.cardTitle}>TÓPICOS EM ALTA</Text>

                    {/* Topics Grid Container */}
                    <View style={styles.topicsGrid}>
                        {trendingTopics.map((topic, index) => (
                            /* Topic Item Chip */
                            <TouchableOpacity key={index} style={styles.topicChip} activeOpacity={0.8}>
                                <Text style={styles.topicText}>{topic}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Recent Searches Card */}
                <View style={styles.card}>
                    {/* Card Title */}
                    <Text style={styles.cardTitle}>PESQUISAS RECENTES</Text>

                    {/* Recent Searches List */}
                    <View style={styles.recentList}>
                        {recentSearches.map((item, index) => (
                            /* Recent Search Item Button */
                            <TouchableOpacity key={index} style={styles.recentItem} activeOpacity={0.8}>
                                <Text style={styles.recentText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: FONT_SIZE.xl + 4,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    iconButton: {
        paddingHorizontal: BUTTON_PADDING.horizontal,
        paddingVertical: BUTTON_PADDING.vertical,
    },
    headerDivider: {
        height: BORDER_WIDTH.thick,
        backgroundColor: COLORS.primary,
    },
    subtitle: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textPrimary,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: BORDER_WIDTH.thick,
        borderColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.default,
        paddingHorizontal: SPACING.md,
        height: 48,
        backgroundColor: COLORS.background,
    },
    searchInput: {
        flex: 1,
        color: COLORS.textPrimary,
        fontSize: FONT_SIZE.sm,
    },
    tabsContainer: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
    tabButton: {
        flex: 1,
        borderRadius: BORDER_RADIUS.default,
        paddingHorizontal: BUTTON_PADDING.horizontal,
        paddingVertical: BUTTON_PADDING.vertical,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeTabButton: {
        backgroundColor: COLORS.primary,
    },
    inactiveTabButton: {
        backgroundColor: COLORS.containerBackground,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.border,
    },
    tabButtonText: {
        fontSize: FONT_SIZE.sm,
        fontWeight: 'bold',
    },
    activeTabText: {
        color: '#000000',
    },
    inactiveTabText: {
        color: COLORS.secondary,
    },
    card: {
        backgroundColor: COLORS.containerBackground,
        borderRadius: BORDER_RADIUS.default,
        borderColor: COLORS.border,
        borderWidth: BORDER_WIDTH.thin,
        padding: SPACING.default,
        gap: SPACING.md,
    },
    cardTitle: {
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    topicsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.sm,
    },
    topicChip: {
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.secondary,
        borderRadius: BORDER_RADIUS.max,
        paddingHorizontal: BUTTON_PADDING.horizontal,
        paddingVertical: BUTTON_PADDING.vertical,
        backgroundColor: COLORS.containerBackground,
    },
    topicText: {
        color: COLORS.textPrimary,
        fontSize: FONT_SIZE.xs,
    },
    recentList: {
        gap: SPACING.sm,
    },
    recentItem: {
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.secondary,
        borderRadius: BORDER_RADIUS.default,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        backgroundColor: COLORS.containerBackground,
    },
    recentText: {
        color: COLORS.textPrimary,
        fontSize: FONT_SIZE.sm,
    },
});