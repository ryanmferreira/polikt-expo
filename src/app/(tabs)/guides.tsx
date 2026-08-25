import Ionicons from '@react-native-vector-icons/ionicons';

import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../../constants/theme';
import { guidesStyles } from '../../styles/guideStyles';

export default function GuidesScreen() {
    const router = useRouter();

    const reportCards = [
        {
            id: '1',
            title: 'Infraestrutura Urbana',
            desc: 'Buracos, iluminação, limpeza',
            image: 'https://s2-casaejardim.glbimg.com/CpaS6GC2Uwe6qOCPEaZ91A5l49g=/0x0:1280x720/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2024/B/b/tqcm19TDaE4BpaTn2awg/maiores-cidades-brasil-salvador-bahia-pexels-leonardodourado-casaejardim.jpg',
        },
        {
            id: '2',
            title: 'Crimes eleitorais',
            desc: 'Compra de votos, caixa dois.',
            image: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/os-crimes-eleitorais-estao-definidos-no-codigo-eleitoral-1965-na-lei-das-eleicoes-1997-5ba943e77ca8a.jpg',
        },
    ];

    return (
        <SafeAreaView style={guidesStyles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {/* Cabeçalho */}
                <View style={guidesStyles.headerRow}>
                    <Text style={guidesStyles.headerTitle}>GUIA DE DENÚNCIAS</Text>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Ionicons name="notifications" size={26} color={THEME.colors.primary} />
                    </TouchableOpacity>
                </View>
                <View style={guidesStyles.mainDivider} />

                {/* Info Box */}
                <View style={guidesStyles.infoBox}>
                    <Text style={guidesStyles.infoText}>
                        Saiba como e onde agir contra irregularidades.
                    </Text>
                </View>

                {/* Tags Filtro */}
                <View style={guidesStyles.tagsContainer}>
                    <TouchableOpacity style={guidesStyles.tag} activeOpacity={0.8}>
                        <Text style={guidesStyles.tagText}>VER TODOS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={guidesStyles.tag} activeOpacity={0.8}>
                        <Text style={guidesStyles.tagText}>URBANO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={guidesStyles.tag} activeOpacity={0.8}>
                        <Text style={guidesStyles.tagText}>ELEITORAL</Text>
                    </TouchableOpacity>
                </View>

                {/* Lista de Cards com Navegação */}
                {reportCards.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={guidesStyles.card}
                        activeOpacity={0.8}
                        onPress={() => router.push(`/guides/${item.id}`)}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={guidesStyles.cardImage}
                        />
                        <View style={guidesStyles.cardContent}>
                            <Text style={guidesStyles.cardTitle}>{item.title}</Text>
                            <View style={guidesStyles.cardDivider} />
                            <Text style={guidesStyles.cardDesc}>{item.desc}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}