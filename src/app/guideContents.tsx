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

export default function GuideContents() {

    const { guide } = useLocalSearchParams();



const guideData = {
    infrastructure: {
        title: 'Lorem ipsum dolor sit amet',

        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem vel magna consequat tincidunt. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_iG2KsKjYthmbhIGfyo_yJYWj7AL_7g66_TaSkfwcmfYoWOTTtceBLEE&s=10',

        steps: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        ],
    },

    electoral: {
        title: 'Lorem ipsum dolor sit amet',

        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem vel magna consequat tincidunt. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

        image:
            'https://f.i.uol.com.br/fotografia/2022/08/25/16614746996308178b8decc_1661474699_3x2_rt.jpg',

        steps: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        ],
    },

    environmental: {
        title: 'Lorem ipsum dolor sit amet',

        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem vel magna consequat tincidunt. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

        image:
            'https://wwfbrnew.awsassets.panda.org/img/original/web_249548.jpg',

        steps: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        ],
    },
};


    // Determines the displayed
    const content =
        guideData[guide as keyof typeof guideData] ||
        guideData.infrastructure;

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


{/**-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


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
