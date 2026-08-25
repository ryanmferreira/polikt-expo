import Ionicons from '@react-native-vector-icons/ionicons';

import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../../constants/theme';
import { coursesStyles } from '../../styles/coursesStyles';

export default function CoursesScreen() {
    const cursosExplorar = [
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

                {/* --- CURSOS EM ANDAMENTO --- */}
                <View style={coursesStyles.headerRow}>
                    <Text style={coursesStyles.headerTitle}>CURSOS EM ANDAMENTO</Text>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Ionicons name="notifications" size={26} color={THEME.colors.primary} />
                    </TouchableOpacity>
                </View>

                <View style={coursesStyles.mainDivider} />

                <View style={coursesStyles.progressCard}>
                    <View style={coursesStyles.tag}>
                        <Text style={coursesStyles.tagText}>ELEITORAL</Text>
                    </View>

                    <Text style={coursesStyles.courseTitle}>VOTO NULO E VOTO BRANCO</Text>
                    <Text style={coursesStyles.courseDesc}>
                        Conceitos, Diferenças e Efeitos no Processo Eleitoral Brasileiro
                    </Text>

                    {/* Barra de Progresso */}
                    <View>
                        <View style={coursesStyles.progressRow}>
                            <Text style={coursesStyles.progressLabel}>PROGRESSO</Text>
                            <Text style={coursesStyles.progressValue}>60%</Text>
                        </View>
                        <View style={coursesStyles.progressTrack}>
                            <View style={[coursesStyles.progressFill, { width: '60%' }]} />
                        </View>
                    </View>

                    <TouchableOpacity style={coursesStyles.actionButton} activeOpacity={0.8}>
                        <Text style={coursesStyles.actionButtonText}>RETOMAR CURSO</Text>
                    </TouchableOpacity>
                </View>

                {/* --- EXPLORAR --- */}
                <View style={coursesStyles.headerRow}>
                    <Text style={coursesStyles.headerTitle}>EXPLORAR</Text>
                </View>
                
                <View style={coursesStyles.mainDivider} />

                {/* Filtros */}
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

                {/* Lista de Cursos */}
                {cursosExplorar.map((curso, index) => (
                    <View key={index} style={coursesStyles.exploreCard}>
                        <Image
                            source={{ uri: curso.image }}
                            style={coursesStyles.exploreCardImage}
                        />

                        <View style={coursesStyles.exploreCardContent}>
                            <Text style={coursesStyles.exploreCourseTitle}>{curso.title}</Text>
                            <Text style={coursesStyles.courseDesc}>{curso.desc}</Text>

                            <View style={coursesStyles.cardDivider} />

                            <View style={coursesStyles.exploreFooter}>
                                <Text style={coursesStyles.exploreFooterInfo}>{curso.info}</Text>

                                <TouchableOpacity style={coursesStyles.actionButton} activeOpacity={0.8}>
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