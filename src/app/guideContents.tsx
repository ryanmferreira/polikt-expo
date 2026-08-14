import { router, useLocalSearchParams } from 'expo-router';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
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
} from '../constants/theme';

export default function guideContents() {

    const { guide } = useLocalSearchParams();



const guideData = {
    infraestrutura: {
        title: 'Problemas na sua rua? Saiba como denunciar',

        description:
            'Buracos, iluminação pública quebrada, descarte irregular de lixo, calçadas danificadas ou outros problemas podem afetar toda a comunidade. Em vez de deixar a situação passar, registre o problema e procure o órgão responsável pelo seu município. Uma denúncia bem feita, com informações claras e registros do local, aumenta as chances de o problema ser identificado e encaminhado.',

        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_iG2KsKjYthmbhIGfyo_yJYWj7AL_7g66_TaSkfwcmfYoWOTTtceBLEE&s=10',

        steps: [
            'Registre o problema. Tire fotos ou vídeos, quando possível, e anote a rua, número do imóvel ou ponto de referência, bairro e uma breve descrição do que está acontecendo.',

            'Procure a Prefeitura, a Ouvidoria ou o órgão responsável pelo serviço na sua cidade. O canal pode variar de acordo com o município e pode estar disponível por telefone, site, aplicativo ou atendimento presencial.',

            'Guarde o número de protocolo ou comprovante da solicitação, caso seja fornecido. Ele pode ser usado para acompanhar o atendimento e cobrar uma solução posteriormente.',
        ],
    },

    eleitoral: {
        title: 'Crimes e irregularidades eleitorais',

        description:
            'Compra de votos, propaganda eleitoral irregular, uso indevido da máquina pública e outras condutas podem ser denunciadas à Justiça Eleitoral. Se você presenciar uma possível irregularidade, procure registrar as informações com cuidado e utilize os canais oficiais.',

        image:
            'https://f.i.uol.com.br/fotografia/2022/08/25/16614746996308178b8decc_1661474699_3x2_rt.jpg',

        steps: [
            'Registre as informações que puder. Anote o local, a data, o horário, o que aconteceu e, quando for seguro, reúna fotos, vídeos, documentos ou outros elementos que possam ajudar na apuração.',

            'Para denúncias de propaganda eleitoral irregular, utilize o aplicativo Pardal, da Justiça Eleitoral. A ferramenta permite enviar informações, fotos, vídeos, áudios e outros registros relacionados à irregularidade.',

            'Para crimes eleitorais e outros ilícitos que não estejam dentro do escopo do Pardal, procure os canais do Ministério Público Eleitoral ou da Justiça Eleitoral da sua região. Guarde o protocolo ou comprovante do registro, quando houver.',
        ],
    },

    ambiental: {
        title: 'Presenciou um crime ambiental? Denuncie',

        description:
            'Desmatamento, queimadas, pesca ilegal, maus-tratos ou comércio ilegal de animais e outras agressões ao meio ambiente podem ser denunciados. Qualquer pessoa pode comunicar uma possível infração às autoridades ambientais, mesmo quando não possui todas as informações sobre o caso.',

        image:
            'https://wwfbrnew.awsassets.panda.org/img/original/web_249548.jpg',

        steps: [
            'Registre o que está acontecendo, sempre que for seguro. Tire fotos ou vídeos e anote o local, a data, o horário, pontos de referência e outras informações que possam ajudar na fiscalização.',

            'Entre em contato com o Ibama pela Linha Verde, no número 0800 061 8080. O é um canal gratuito e recebe denuncias de todo o Brasil. Também é possível utilizar a plataforma Fala.BR para registrar a mnifestação.',

            'A denúncia pode ser feita com identificação ou sem identificação. Guarde o número de protocolo ou comprovante fornecido pelo canal utilizado para acompanhar a manifestação, quando disponível.',
        ],
    },
};


    // Determines the displayed
    const content =
        guideData[guide as keyof typeof guideData] ||
        guideData.infraestrutura;

/**--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    return (
        /* Safe Area View */
        <SafeAreaView style={styles.safeArea}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.background}
            />

            {/* Scroll Container */}
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.blueText}>
                            VOLTAR
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.blueText}>
                            COMPARTILHAR
                        </Text>
                    </TouchableOpacity>
                </View>

{/**-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                {/* In Progress Course Card */}
                <View style={styles.card}>


                    {/* Header Container */}
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>
                            {content.title}
                        </Text>
                    </View>

                    {/* Header Divider */}
                    <View style={styles.headerDivider} />


                    {/* Guide Description */}
                    <Text style={styles.cardDescription}>
                        {content.description}
                    </Text>


                    {/* Section Header */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Etapa1</Text>
                        <View style={styles.sectionDivider} />
                    </View>

{/**-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                    {/* Progress Bar Track */}
                    <View style={styles.progressBarTrack}>


                        {/* Progress Bar Fill */}
                        <View style={styles.progressBarFill} />
                    </View>


                    {/* Filter Categories Row */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.categoriesRow}>
                    </ScrollView>


                    {/* Guide Image */}
                    <Image
                        source={{
                            uri: content.image,
                        }}
                        style={styles.cardImage}/>


{/**-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


                    {/* Text Boxes */}
                    {content.steps.map((step, index) => (
                        <View
                            style={styles.textBox}
                            key={index}>
                            <Text style={styles.text}>
                                {step}
                            </Text>
                        </View>
                    ))}


{/**-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                    {/* Header Divider */}
                    <View style={styles.headerDivider} />


                    {/* Button */}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Próximo passo
                        </Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

/**-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


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
        fontSize: FONT_SIZE.lg,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    headerDivider: {
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
    cardDescription: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.textSecondary,
    },
    progressBarTrack: {
        height: 12,
        backgroundColor: '#FFFFFF',
        borderRadius: BORDER_RADIUS.default,
        overflow: 'hidden',
    },
    progressBarFill: {
        width: '60%',
        height: '100%',
        backgroundColor: COLORS.secondary,
        borderRadius: BORDER_RADIUS.default,
    },
    sectionHeader: {
        gap: SPACING.xs,
    },
    sectionTitle: {
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    sectionDivider: {
        height: BORDER_WIDTH.thick,
        backgroundColor: COLORS.primary,
    },
    categoriesRow: {
        gap: SPACING.sm,
    },
    chipButton: {
        borderRadius: BORDER_RADIUS.max,
        paddingHorizontal: BUTTON_PADDING.horizontal,
        paddingVertical: BUTTON_PADDING.vertical,
    },
    activeChip: {
        backgroundColor: COLORS.secondary,
    },
    inactiveChip: {
        backgroundColor: COLORS.containerBackground,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.border,
    },
    chipText: {
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },
    activeChipText: {
        color: '#000000',
    },
    inactiveChipText: {
        color: COLORS.secondary,
    },
    cardImage: {
        width: '100%',
        height: 160,
        borderRadius: BORDER_RADIUS.default,
    },
    textBox: {
        backgroundColor: COLORS.containerBackground,
        padding: SPACING.sm,
    },
    text: {
        color: COLORS.textPrimary,
        fontSize: FONT_SIZE.xs,
        lineHeight: 15,
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.default,
        paddingHorizontal: BUTTON_PADDING.horizontal,
        paddingVertical: BUTTON_PADDING.vertical,
        alignItems: 'center',
        marginTop: SPACING.xs,
    },
    buttonText: {
        color: '#000000',
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },
    blueText: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },
});
