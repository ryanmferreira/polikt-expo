import Ionicons from '@react-native-vector-icons/ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../../constants/theme';
import { articleStyles as styles } from '../../styles/articleStyles';

export default function ArticleScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace('/(tabs)/home');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
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
                <View style={styles.cardSection}>
                    <View style={styles.tagsContainer}>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>ECONOMIA</Text>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.tagText}>PISO NACIONAL</Text>
                        </View>
                    </View>

                    <Text style={styles.mainTitle}>
                        GOVERNO FEDERAL DEFINE NOVO SALÁRIO MÍNIMO DE 2026
                    </Text>

                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                        style={styles.cardImage}
                    />

                    <Text style={styles.leadText}>
                        Confira os detalhes das novas alterações na renda do brasileiro em 2026.
                    </Text>

                    <TouchableOpacity style={styles.summaryButton} activeOpacity={0.8}>
                        <Ionicons name="document-text" size={16} color={THEME.colors.black} style={{ marginRight: 6 }} />
                        <Text style={styles.summaryButtonText}>VER RESUMO</Text>
                    </TouchableOpacity>
                </View>

                {/* Card de Metadados */}
                <View style={[styles.cardSection, styles.metaCard]}>
                    <Text style={styles.metaText}>20/08/2026</Text>
                    <Text style={styles.metaText}>
                        <Text style={{ fontWeight: '700' }}>5 min</Text> de leitura
                    </Text>
                    <Text style={styles.metaText}>
                        Por <Text style={{ fontWeight: '700' }}>Murilo Andrade</Text>
                    </Text>
                </View>

                {/* Parágrafo Introdutório */}
                <View style={styles.cardSection}>
                    <Text style={styles.paragraph}>
                        O governo federal definiu o salário mínimo de 2026 em R$ 1.621, com reajuste de aproximadamente 6,79% em relação ao valor anterior. O aumento teria sido oficializado por decreto e segue a política de valorização do salário mínimo, que busca corrigir o valor com base na inflação e no crescimento da economia, mas dentro dos limites do novo arcabouço fiscal.
                    </Text>
                </View>

                {/* Seção: Quanto vale o mínimo  */}
                <View style={styles.cardSection}>
                    <Text style={styles.sectionTitle}>QUANTO VALE O MÍNIMO EM 2026?</Text>

                    <Text style={styles.paragraph}>
                        Com o valor de R$ 1.621, o salário mínimo equivale aproximadamente a:
                    </Text>

                    <View style={styles.nestedCard}>
                        <Text style={styles.nestedCardText}>
                            <Text style={{ fontWeight: '700' }}>Mensal:</Text> R$ 1.621
                        </Text>
                    </View>

                    <View style={styles.nestedCard}>
                        <Text style={styles.nestedCardText}>
                            <Text style={{ fontWeight: '700' }}>Diário (base 30 dias):</Text> R$ 54,04
                        </Text>
                    </View>

                    <View style={styles.nestedCard}>
                        <Text style={styles.nestedCardText}>
                            <Text style={{ fontWeight: '700' }}>Por hora (jornada padrão):</Text> R$ 7,37
                        </Text>
                    </View>
                </View>

                {/* Seção: Como foi calculatdo */}
                <View style={styles.cardSection}>
                    <Text style={styles.sectionTitle}>COMO O REAJUSTE FOI CALCULADO?</Text>
                    <View style={styles.sectionDivider} />

                    <Text style={styles.paragraph}>
                        O reajuste não é definido de forma arbitrária. Ele segue uma fórmula que combina três fatores principais:
                    </Text>

                    <View style={styles.bulletList}>
                        <Text style={styles.nestedCardText}>
                            - <Text style={{ fontWeight: '700', color: THEME.colors.white }}>Inflação (INPC):</Text> Garante a manutenção do poder de compra, recompondo a perda acumulada dos preços para famílias de baixa renda (aprox. 4,18%).
                        </Text>
                        <Text style={styles.nestedCardText}>
                            - <Text style={{ fontWeight: '700', color: THEME.colors.white }}>Crescimento do PIB:</Text> Adiciona um ganho real ao salário, baseado na performance da economia (estimada em 3,4%).
                        </Text>
                        <Text style={styles.nestedCardText}>
                            - <Text style={{ fontWeight: '700', color: THEME.colors.white }}>Arcabouço Fiscal:</Text> Atua como um moderador. Embora o PIB tenha crescido mais, essa regra de controle de gastos limita o ganho real a um teto de 2,5% acima da inflação, garantindo a responsabilidade fiscal do governo.
                        </Text>
                    </View>
                </View>

                {/* Seção: Impacto na Economia */}
                <View style={styles.cardSection}>
                    <Text style={styles.sectionTitle}>IMPACTO NA ECONOMIA</Text>
                    <View style={styles.sectionDivider} />

                    <Text style={styles.paragraph}>
                        O salário mínimo tem um impacto extremamente amplo na sociedade brasileira. Segundo estimativas, o salário mínimo impacta cerca de 61,9 milhões de brasileiros, incluindo trabalhadores formais, aposentados, pensionistas e beneficiários de programas sociais.
                    </Text>

                    <Text style={styles.paragraph}>
                        Esse reajuste influencia diretamente o consumo das famílias e a economia. Estimativas indicam aumento significativo na circulação de renda, mas também maior impacto nas contas públicas, especialmente na Previdência Social.
                    </Text>

                    <Text style={[styles.sectionTitle, { marginTop: 16 }]}>ENTRE OS IMPACTADOS ESTÃO:</Text>

                    <View style={styles.sectionDivider} />

                    <View style={styles.nestedCard}>
                        <Text style={styles.nestedCardText}>
                            Trabalhadores formais que recebem o salário mínimo (São aqueles que têm carteira assinada e ganham o piso nacional, de modo que qualquer reajuste no salário mínimo altera diretamente sua renda mensal e o poder de compra no dia a dia).
                        </Text>
                    </View>

                    <View style={styles.nestedCard}>
                        <Text style={styles.nestedCardText}>
                            Aposentados e pensionistas do INSS (São beneficiários da Previdência Social que recebem valores vinculados ao salário mínimo, o que faz com que seus pagamentos sejam automaticamente reajustados sempre que o piso nacional aumenta).
                        </Text>
                    </View>

                    <View style={styles.nestedCard}>
                        <Text style={styles.nestedCardText}>
                            Beneficiários de programas sociais (São pessoas que dependem de políticas de transferência de renda do governo, nas quais o salário mínimo é usado como referência para definir quem tem direito a certos benefícios e, em alguns casos, o valor pago).
                        </Text>
                    </View>

                    <View style={styles.nestedCard}>
                        <Text style={styles.nestedCardText}>
                            Pessoas que recebem benefícios assistenciais vinculados ao mínimo (São cidadãos atendidos por auxílios como o BPC, cujo valor é diretamente atrelado ao salário mínimo, garantindo que o benefício acompanhe as mudanças do piso nacional).
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}