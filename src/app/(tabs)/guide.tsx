import { useState } from 'react';
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
} from '../../constants/theme';

export default function GuideScreen() {
  const [selectedCategory, setSelectedCategory] = useState('VER TODOS');

  const categories = ['VER TODOS', 'ELEITORAL', 'URBANO', 'DENÚNCIAS'];

  const guideItems = [
    {
      id: '1',
      title: 'Infraestrutura Urbana',
      description: 'Buracos, iluminação, limpeza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_iG2KsKjYthmbhIGfyo_yJYWj7AL_7g66_TaSkfwcmfYoWOTTtceBLEE&s=10',
    },
    {
      id: '2',
      title: 'Crimes eleitorais',
      description: 'Compra de votos, caixa dois.',
      image: 'https://f.i.uol.com.br/fotografia/2022/08/25/16614746996308178b8decc_1661474699_3x2_rt.jpg',
    },
  ];

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
          {/* Header Title */}
          <Text style={styles.headerTitle}>GUIA DE DENÚNCIAS</Text>
        </View>

        {/* Header Divider */}
        <View style={styles.headerDivider} />

        {/* Subtitle Text */}
        <Text style={styles.subtitle}>
          Saiba como e onde agir contra irregularidades.
        </Text>

        {/* Filter Categories Row */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesRow}
        >
          {categories.map((category) => (
            /* Category Filter Button */
            <TouchableOpacity
              key={category}
              style={[
                styles.chipButton,
                selectedCategory === category ? styles.activeChip : styles.inactiveChip,
              ]}
              onPress={() => setSelectedCategory(category)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.chipText,
                  selectedCategory === category
                    ? styles.activeChipText
                    : styles.inactiveChipText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Guide Items List */}
        {guideItems.map((item) => (
          /* Guide Item Card */
          <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.8}>
            {/* Card Image */}
            <Image source={{ uri: item.image }} style={styles.cardImage} />

            {/* Card Content Container */}
            <View style={styles.cardContent}>
              {/* Card Title */}
              <Text style={styles.cardTitle}>{item.title}</Text>

              {/* Card Divider */}
              <View style={styles.cardDivider} />

              {/* Card Description */}
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: FONT_SIZE.xl,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  headerDivider: {
    height: BORDER_WIDTH.thick,
    backgroundColor: COLORS.primary,
  },
  subtitle: {
    fontSize: FONT_SIZE.md,
    color: COLORS.textPrimary,
    lineHeight: 22,
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
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.containerBackground,
    borderRadius: BORDER_RADIUS.default,
    borderColor: COLORS.border,
    borderWidth: BORDER_WIDTH.thin,
    padding: SPACING.sm,
    gap: SPACING.md,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 80,
    borderRadius: BORDER_RADIUS.default,
  },
  cardContent: {
    flex: 1,
    gap: SPACING.xs,
  },
  cardTitle: {
    fontSize: FONT_SIZE.sm,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  cardDivider: {
    height: BORDER_WIDTH.thin,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.xs,
  },
  cardDescription: {
    fontSize: FONT_SIZE.xs,
    color: COLORS.textSecondary,
  },
});