import Ionicons from '@react-native-vector-icons/ionicons';

import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router } from 'expo-router';
import { THEME } from '../../constants/theme';
import { coursesStyles } from '../../styles/coursesStyles';

export default function CoursesScreen() {

    // TODO: Replace with real data
    const exploreCourses = [
        {
            id: 1,
            title: 'VOTO NULO E VOTO BRANCO',
            desc: 'Conceitos, Diferenças e Efeitos no Processo Eleitoral Brasileiro',
            info: '15min - 6 Módulos',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZDNRXDsx4zBokTIcZh1XPD9AB7HZCrWFgBhpql5Bm6jRY7LDytnjU88&s=10',
        },
        {
            id: 2,
            title: 'VOTO NULO E VOTO BRANCO',
            desc: 'Conceitos, Diferenças e Efeitos no Processo Eleitoral Brasileiro',
            info: '15min - 6 Módulos',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZDNRXDsx4zBokTIcZh1XPD9AB7HZCrWFgBhpql5Bm6jRY7LDytnjU88&s=10',
        }
    ];

    return (
        <SafeAreaView style={coursesStyles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}>

                {/* Header - Courses in progress */}
                <View style={coursesStyles.headerRow}>
                    <Text style={coursesStyles.headerTitle}>CURSOS EM ANDAMENTO</Text>

                    {/* Notifications icon */}
                    <TouchableOpacity activeOpacity={0.7}>
                        <Ionicons name="notifications" size={26} color={THEME.colors.primary} />
                    </TouchableOpacity>
                </View>

                <View style={coursesStyles.mainDivider} />

                {/* Progress card */}
                <View style={coursesStyles.progressCard}>

                    {/* // TODO: Implement tags */}
                    <View style={coursesStyles.tag}>
                        <Text style={coursesStyles.tagText}>ELEITORAL</Text>
                    </View>

                    {/* Title */}
                    <Text style={coursesStyles.courseTitle}>VOTO NULO E VOTO BRANCO</Text>

                    <Text style={coursesStyles.courseDesc}>
                        Conceitos, Diferenças e Efeitos no Processo Eleitoral Brasileiro
                    </Text>

                    {/* Progress bar */}
                    <View>
                        <View style={coursesStyles.progressRow}>
                            <Text style={coursesStyles.progressLabel}>PROGRESSO</Text>
                            <Text style={coursesStyles.progressValue}>60%</Text>
                        </View>

                        <View style={coursesStyles.progressTrack}>
                            <View style={[coursesStyles.progressFill, { width: '60%' }]} />
                        </View>
                    </View>

                    {/* Action button */}
                    <TouchableOpacity style={coursesStyles.actionButton} activeOpacity={0.8} onPress={() => router.push('../courseprogress')}>
                        <Text style={coursesStyles.actionButtonText}>RETOMAR CURSO</Text>
                    </TouchableOpacity>
                </View>

                {/* Explore section */}
                <View style={coursesStyles.headerRow}>
                    <Text style={coursesStyles.headerTitle}>EXPLORAR</Text>
                </View>

                <View style={coursesStyles.mainDivider} />

                {/* Filters */}
                <View style={coursesStyles.tagsContainer}>
                    <TouchableOpacity style={coursesStyles.tag} activeOpacity={0.8}>
                        <Text style={coursesStyles.tagText}>VER TODOS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={coursesStyles.tag} activeOpacity={0.8}>
                        <Text style={coursesStyles.tagText}>GOVERNANÇA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={coursesStyles.tag} activeOpacity={0.8}>
                        <Text style={coursesStyles.tagText}>ELEITORAL</Text>
                    </TouchableOpacity>
                </View>

                {/* Courses list // TODO: Replace with real data */}
                {exploreCourses.map((course, index) => (
                    <View key={index} style={coursesStyles.exploreCard}>
                        <Image source={{ uri: course.image }} style={coursesStyles.exploreCardImage} />

                        <View style={coursesStyles.exploreCardContent}>
                            <Text style={coursesStyles.exploreCourseTitle}>{course.title}</Text>

                            <Text style={coursesStyles.courseDesc}>{course.desc}</Text>

                            <View style={coursesStyles.cardDivider} />

                            <View style={coursesStyles.exploreFooter}>
                                <Text style={coursesStyles.exploreFooterInfo}>{course.info}</Text>

                                <TouchableOpacity style={coursesStyles.actionButton} activeOpacity={0.8} onPress={() => router.push('../courseprogress')}>
                                    <Text style={coursesStyles.actionButtonText}>INICIAR CURSO</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}