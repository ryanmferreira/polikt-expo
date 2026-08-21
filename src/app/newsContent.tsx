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

export default function NewsContents() {
    const { news } = useLocalSearchParams();

    const newsData = {
        salario: {
 
            title: 'GOVERNO FEDERAL DEFINE NOVO SALÁRIO MÍNIMO DE 2026',

            image:
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',

            caption:
                'Confira os detalhes das novas alterações na renda do brasileiro em 2026.',

        },
    };

    const content =
        newsData[news as keyof typeof newsData] ||
        newsData.salario;

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.background}
            />

            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* NEWS HEADER */}
                <View style={styles.gap}>
                    {/* Header Actions */}
                    <View style={styles.headerActions}>
                        {/* Back Button */}
                        <TouchableOpacity
                            onPress={() => router.back()}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.blueText}>
                                VOLTAR
                            </Text>
                        </TouchableOpacity>



                        {/* Share Button */}
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={styles.blueText}>
                                COMPARTILHAR
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Header Divider */}
                    <View style={styles.headerDivider} /></View>

{/**--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}



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
                     



                    {/* Title */}
                    <Text style={styles.cardTitle}>
                        {content.title}
                    </Text>
                

{/**--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


                {/* IMAGE CARD */}
                <View style={styles.gap}>
                    {/* News Image */}
                    <Image
                        source={{
                            uri: content.image,
                        }}
                        style={styles.cardImage}
                        resizeMode="cover"
                    />

                    {/* Caption */}
                    <Text style={styles.caption}>
                        {content.caption}
                    </Text>
                </View>


{/**--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                {/* Button */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        VER RESUMO
                    </Text>
                </TouchableOpacity>



                <View style={styles.card}>  
                    <Text style={styles.text}>  
                         Lorem                 ipsum dolor                    sit amet  {/**gambiarra monstruosa, arrumar mais tarde*/}
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et neque ac arcu vehicula placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Nulla egestas venenatis tempus. Curabitur est lacus, dapibus ac pellentesque id, suscipit non metus. Integer eu nunc malesuada libero pretium malesuada. Fusce dapibus interdum sagittis. Donec volutpat congue dui eu posuere.
                    </Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.gap}>
                        <Text style={styles.title}>Lorem ipsum dolor sit amet.</Text>
                    </View>

                    <View style={styles.headerDivider} />

                    <View style={styles.gap}>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>
                                Lorem ipsum dolor sit amet.
                            </Text>
                        </View>

                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>
                                Lorem ipsum dolor sit amet.
                            </Text>
                        </View>

                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>
                                Lorem ipsum dolor sit amet.
                            </Text>
                        </View>

                    </View>
                </View>


{/**--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


                <View style={styles.card}>
                    <View style={styles.gap}>
                        <Text style={styles.title}>Lorem ipsum dolor sit amet.</Text>
                    </View>
                    <View style={styles.headerDivider} />
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu tortor, molestie ac mattis vitae, posuere sit amet lorem. Donec nec urna pharetra odio aliquet dapibus. Fusce tristique quam et tempor laoreet. Nullam lobortis eget sem sit amet interdum. Mauris imperdiet ipsum at diam varius, sed accumsan lorem mollis. Suspendisse laoreet nisi sed augue tristique fringilla.
                        
                    </Text>



                    <View style={styles.gap}>
                        <Text style={styles.title}>Lorem ipsum dolor sit amet.</Text>
                    </View>
                    <View style={styles.headerDivider} />
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et neque ac arcu vehicula placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Nulla egestas venenatis tempus. Curabitur est lacus, dapibus ac pellentesque id, suscipit non metus. Integer eu nunc malesuada libero pretium malesuada. Fusce dapibus interdum sagittis. Donec volutpat congue dui eu posuere.
                    </Text>
   
                    <View style={styles.gap}>
                        <Text style={styles.title}>Lorem ipsum dolor sit amet.</Text>
                    </View>

                    <View style={styles.headerDivider} />

                    
{/**--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


                    <View >
                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et neque ac arcu vehicula placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus.  
                            </Text>
                        </View>

                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et neque ac arcu vehicula placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus.  
                            </Text>
                        </View>

                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et neque ac arcu vehicula placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus.  
                            </Text>
                        </View>

 
                </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}


{/**--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ }


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


    gap: {
        gap: SPACING.sm,
    },


    headerActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },


    blueText: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },


    headerDivider: {
        height: BORDER_WIDTH.thick,
        backgroundColor: COLORS.primary,
        width: '100%',
    },


    card: {
        backgroundColor: COLORS.containerBackground,
        borderRadius: BORDER_RADIUS.default,
        borderColor: COLORS.border,
        borderWidth: BORDER_WIDTH.thin,
        padding: SPACING.default,
        gap: SPACING.sm,
    },


    title: {
        fontSize: FONT_SIZE.lg,
        fontWeight: 'bold',
        color: COLORS.primary,
        textTransform: 'uppercase',
    },


    cardDescription: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.textSecondary,
        lineHeight: 18,
    },


    cardTitle: {
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
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
        width: '100%',
    },


    newsSection: {
        gap: SPACING.sm,
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


    cardImage: {
        width: '100%',
        height: 160,
        borderRadius: BORDER_RADIUS.default,
    },


    caption: {
        fontSize: FONT_SIZE.xs,
        color: COLORS.textSecondary,
        lineHeight: 15,
    },


    metadataText: {
        fontSize: FONT_SIZE.xs,
        color: COLORS.textSecondary,
    },


    text: {
        color: COLORS.textPrimary,
        fontSize: FONT_SIZE.sm,
        lineHeight: 18,
    },


    alertTitle: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },


    alertText: {
        color: COLORS.textSecondary,
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

  


    infoBox: {
        backgroundColor: COLORS.darkercontainerBackground,
        borderRadius: BORDER_RADIUS.default,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.border,
        padding: SPACING.sm,
    },


    infoText: {
        color: COLORS.textPrimary,
        fontSize: FONT_SIZE.sm,
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
});

