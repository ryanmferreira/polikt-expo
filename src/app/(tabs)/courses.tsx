import { ArrowRight, Bell, BookOpen, RefreshCw, Settings2 } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Platform, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getCourses } from '../../services/courses';
import { THEME } from '../../constants/theme';
import { Course } from '../../models/course';

import { coursesStyles } from '../../styles/courseStyles';
import { RESPONSIVE_BREAKPOINT, responsiveStyles } from '../../styles/responsiveStyles';

export default function CoursesScreen() {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const useGrid = Platform.OS === 'web' && width >= RESPONSIVE_BREAKPOINT;
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadCourses();
    }, []);

    async function loadCourses() {
        try {
            setLoading(true);
            setError(null);
            const data = await getCourses();
            setCourses(data);
        } catch (e) {
            setError('Não foi possível carregar os cursos.');
        } finally {
            setLoading(false);
        }
    }

    if (error) {
        return (
            <SafeAreaView style={[coursesStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{ color: THEME.colors.text, marginBottom: 12 }}>{error}</Text>
                <TouchableOpacity onPress={loadCourses}>
                    <Text style={{ color: THEME.colors.primary }}>Tentar novamente</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={coursesStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[{ paddingBottom: 100 }, responsiveStyles.pageContent]}>

                {/* Header */}
                <View style={coursesStyles.headerRow}>
                    <Text style={coursesStyles.headerTitle}>CURSOS</Text>

                    {/* Notifications icon */}
                    <TouchableOpacity activeOpacity={0.7}>
                        <Bell color={THEME.colors.primary} size={26} />
                    </TouchableOpacity>
                </View>

                <View style={coursesStyles.mainDivider} />

                <View style={coursesStyles.infoBox}>
                    <View style={coursesStyles.infoHeading}>
                        <Text style={coursesStyles.infoTitle}>CURSOS DISPONÍVEIS</Text>
                    </View>
                    <Text style={coursesStyles.infoText}>
                        Explore nossos materiais educativos e aprimore seus conhecimentos.
                    </Text>
                </View>

                {/* Explore section */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={coursesStyles.headerTitle}>EXPLORAR</Text>
                    <Settings2 color={THEME.colors.primary} size={22} style={{ marginBottom: 8 }} />
                </View>

                <View style={coursesStyles.mainDivider} />

                {/* Filters */}
                <View style={coursesStyles.tagsContainer}>
                    <TouchableOpacity activeOpacity={0.8} style={coursesStyles.tag}>
                        <Text style={coursesStyles.tagText}>VER TODOS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} style={coursesStyles.tag}>
                        <Text style={coursesStyles.tagText}>TECNOLOGIA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} style={coursesStyles.tag}>
                        <Text style={coursesStyles.tagText}>GESTÃO</Text>
                    </TouchableOpacity>
                </View>

                {/* Refresh button */}
                {!loading && (
                    <TouchableOpacity activeOpacity={0.7} onPress={loadCourses} style={coursesStyles.refreshButton}>
                        <RefreshCw color={THEME.colors.primary} size={16} />
                        <Text style={coursesStyles.refreshButtonText}>Atualizar</Text>
                    </TouchableOpacity>
                )}

                {loading && (
                    <View style={{ paddingVertical: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color={THEME.colors.primary} style={{ marginTop: 20 }} />
                        <Text style={{ marginTop: 8, fontSize: 12, color: THEME.colors.text }}>Carregando cursos...</Text>
                    </View>
                )}

                {/* List of courses */}
                <View style={useGrid ? responsiveStyles.grid : undefined}>
                    {courses.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            activeOpacity={0.8}
                            accessibilityRole="button"
                            accessibilityLabel={`Abrir curso: ${item.title}`}
   
                            onPress={() => router.push(`/courses/${item.id}`)}
                            style={[
                                coursesStyles.card,
                                useGrid && responsiveStyles.guideGridCard,
                            ]}
                        >
                            <View style={[coursesStyles.cardImageWrap, useGrid && responsiveStyles.guideGridImage]}>
                                {item.coverImage ? (
                                    <Image source={{ uri: item.coverImage }} style={coursesStyles.cardImage} resizeMode="cover" />
                                ) : (
                                    <View style={coursesStyles.cardImagePlaceholder}>
                                        <BookOpen color={THEME.colors.primary} size={38} />
                                    </View>
                                )}
                            </View>

                            <View style={coursesStyles.cardContent}>
                                <Text style={coursesStyles.cardTitle} numberOfLines={2}>
                                    {item.title}
                                </Text>

                                <Text style={coursesStyles.cardDesc} numberOfLines={2}>
                                    {item.description}
                                </Text>

                                <View style={coursesStyles.cardFooter}>
                                    <Text style={coursesStyles.cardActionText}>VER CURSO</Text>
                                    <ArrowRight color={THEME.colors.primary} size={16} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}