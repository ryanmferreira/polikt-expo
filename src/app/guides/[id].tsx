import Ionicons from '@react-native-vector-icons/ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../constants/theme';
import { guidesStyles as styles } from '../../styles/guideStyles';

export default function GuideScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const guideDetailsMap: Record<
        string,
        {
            title: string;
            desc: string;
            image: string;
            category: string;
            steps: string[];
        }
    > = {
        '1': {
            title: 'COMO SOLICITAR REPAROS EM INFRAESTRUTURA URBANA',
            desc: 'Aprenda os caminhos oficiais para registrar ocorrências de iluminação, buracos na via e limpeza pública no seu município.',
            image:
                'https://s2-casaejardim.glbimg.com/CpaS6GC2Uwe6qOCPEaZ91A5l49g=/0x0:1280x720/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2024/B/b/tqcm19TDaE4BpaTn2awg/maiores-cidades-brasil-salvador-bahia-pexels-leonardodourado-casaejardim.jpg',
            category: 'INFRAESTRUTURA',
            steps: [
                'Registre fotos e guarde a localização exata do problema urbano.',
                'Acesse o portal da Ouvidoria da Prefeitura ou o canal de atendimento local.',
                'Guarde o número do protocolo gerado para acompanhar a execução.',
            ],
        },
        '2': {
            title: 'GUIA PRÁTICO PARA DENÚNCIA DE CRIMES ELEITORAIS',
            desc: 'Saiba como agir diante de irregularidades como compra de votos, caixa dois e propaganda eleitoral ilegal.',
            image:
                'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/os-crimes-eleitorais-estao-definidos-no-codigo-eleitoral-1965-na-lei-das-eleicoes-1997-5ba943e77ca8a.jpg',
            category: 'ELEITORAL',
            steps: [
                'Reúna evidências como fotos, áudios, vídeos ou documentos comprobatórios.',
                'Acesse o aplicativo Pardal do Tribunal Superior Eleitoral (TSE).',
                'Acompanhe a apuração da denúncia no Ministério Público Eleitoral.',
            ],
        },
    };

    const content = guideDetailsMap[id as string] || guideDetailsMap['1'];

    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace('/(tabs)/guides');
        }
    };

    return (
        <SafeAreaView style={styles.detailContainer}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={handleBack}
                    activeOpacity={0.7}
                >
                    <Ionicons name="chevron-back" size={20} color={THEME.colors.primary} />
                    <Text style={styles.topBarText}>VOLTAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
                    <Ionicons name="share-social" size={18} color={THEME.colors.primary} />
                    <Text style={styles.topBarText}>COMPARTILHAR</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Main Card */}
                <View style={styles.mainCard}>
                    <View style={styles.tagRow}>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>{content.category}</Text>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.tagText}>GUIA DE DENÚNCIA</Text>
                        </View>
                    </View>

                    <Text style={styles.mainTitle}>{content.title}</Text>

                    {/* Barra de Progresso Simples */}
                    <View style={styles.progressHeader}>
                        <Text style={styles.progressHeaderText}>ETAPA 1</Text>

                        <Text style={styles.progressHeaderText}>
                            {content.steps.length} ETAPAS
                        </Text>
                    </View>

                    <View style={styles.progressTrack}>
                        <View style={[styles.progressFill, { width: '33%' }]} />
                    </View>

                    <Image
                        source={{ uri: content.image }}
                        style={styles.detailImage}
                    />

                    <Text style={styles.leadText}>{content.desc}</Text>
                </View>

                {/* Seção dos Passos do Guia */}
                <View style={styles.cardSection}>
                    <Text style={styles.sectionTitle}>ETAPAS DO PROCESSO</Text>
                    <View style={styles.sectionDivider} />

                    {content.steps.map((step, index) => (
                        <View style={styles.stepCard} key={index}>
                            <Text style={styles.stepText}>
                                <Text style={{ fontWeight: '800', color: THEME.colors.white }}>
                                    Passo {index + 1}:{' '}
                                </Text>
                                {step}
                            </Text>
                        </View>
                    ))}

                    {/* Botão Próximo */}
                    <TouchableOpacity style={styles.nextButton} activeOpacity={0.8}>
                        <Text style={styles.nextButtonText}>PRÓXIMO</Text>
                        <Ionicons
                            name="chevron-forward"
                            size={16}
                            color={THEME.colors.black}
                            style={{ marginLeft: 4 }}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}