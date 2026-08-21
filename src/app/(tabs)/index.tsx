import Ionicons from '@react-native-vector-icons/ionicons';
import { useState } from 'react';
import {
    Image,
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

export default function HomeScreen() {
    const [searchQuery, setSearchQuery] = useState('');

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
                    {/* Header Title Wrapper */}
                    <View>
                        <Text style={styles.headerGreeting}>BOM DIA,</Text>
                        <Text style={styles.headerTitle}>CIDADÃO!</Text>
                    </View>

                    {/* Notification Button */}
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="notifications" size={26} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>

                {/* Subtitle Text */}
                <Text style={styles.subtitle}>O que deseja aprender hoje?</Text>

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

                {/* Section Header */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>ÚLTIMAS NOTÍCIAS</Text>
                    <View style={styles.sectionDivider} />
                </View>

                {/* News Card */}
                <View style={styles.card}>
                    {/* Tags Container */}
                    <View style={styles.tagsContainer}>
                        {/* Tag Item */}
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>ECONOMIA</Text>
                        </View>
                        {/* Tag Item */}
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>PISO NACIONAL</Text>
                        </View>
                    </View>

                    {/* Card Image */}
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
                        }}
                        style={styles.cardImage}
                    />

                    {/* Card News Title */}
                    <Text style={styles.cardTitle}>
                        GOVERNO FEDERAL DEFINE NOVO SALÁRIO MÍNIMO DE 2026
                    </Text>

                    {/* Card News Description */}
                    <Text style={styles.cardDescription}>
                        Confira os detalhes das novas alterações na renda do brasileiro em 2026.
                    </Text>

                    {/* Card Divider */}
                    <View style={styles.cardDivider} />

                    {/* Card Footer Actions */}
                    <View style={styles.cardFooter}>
                        {/* Upvote Button */}
                        <TouchableOpacity style={styles.actionButton}>
                            <Ionicons name="chevron-up-outline" size={18} color={COLORS.textSecondary} />
                            <Text style={styles.actionText}>40</Text>
                        </TouchableOpacity>

                        {/* Comment Button */}
                        <TouchableOpacity style={styles.actionButton}>
                            <Ionicons name="chatbubble-outline" size={16} color={COLORS.textSecondary} />
                            <Text style={styles.actionText}>60</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
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
    headerGreeting: {
        fontSize: FONT_SIZE.xl,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
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
    sectionHeader: {
        gap: SPACING.xs,
    },
    sectionTitle: {
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    sectionDivider: {
        height: BORDER_WIDTH.thick,
        backgroundColor: COLORS.primary,
    },
    card: {
        backgroundColor: COLORS.containerBackground,
        borderRadius: BORDER_RADIUS.default,
        borderColor: COLORS.border,
        borderWidth: BORDER_WIDTH.thin,
        padding: SPACING.default,
        gap: SPACING.sm,
    },
    tagsContainer: {
        flexDirection: 'row',
        gap: SPACING.sm,
    },
    tag: {
        backgroundColor: COLORS.secondary,
        paddingHorizontal: BUTTON_PADDING.horizontal,
        paddingVertical: BUTTON_PADDING.vertical,
        borderRadius: BORDER_RADIUS.max,
    },
    tagText: {
        color: '#000000',
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },
    cardImage: {
        width: '100%',
        height: 160,
        borderRadius: BORDER_RADIUS.default,
        marginVertical: SPACING.xs,
    },
    cardTitle: {
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },
    cardDescription: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.textSecondary,
    },
    cardDivider: {
        height: BORDER_WIDTH.thin,
        backgroundColor: COLORS.border,
        marginVertical: SPACING.xs,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.xs,
        paddingHorizontal: BUTTON_PADDING.horizontal,
        paddingVertical: BUTTON_PADDING.vertical,
    },
    actionText: {
        color: COLORS.textSecondary,
        fontSize: FONT_SIZE.sm,
    },
});