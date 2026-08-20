import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import {
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
  COLORS,
  FONT_SIZE,
  SPACING,
} from '../constants/theme';


type TrailStatus = 'completo' | 'atual' | 'trancado';

type TrailItemProps = {
  title: string;
  status: TrailStatus;
  last?: boolean;
};


function TrailItem({ title, status, last = false }: TrailItemProps) {
  const isCompleted = status === 'completo';
  const isCurrent = status === 'atual';

  return (
    <View style={styles.trailItem}>
      
      {!last && <View style={styles.timelineLine} />}

      
      <TouchableOpacity
        style={styles.trailNodeArea}
        activeOpacity={isCurrent || isCompleted ? 0.8 : 1}
        disabled={!isCurrent && !isCompleted}
      >
        <View
          style={[
            styles.trailCircle,
            isCompleted && styles.completedCircle,
            isCurrent && styles.currentCircle,
            !isCompleted && !isCurrent && styles.lockedCircle,
          ]}
        >
          <Ionicons
            name={isCompleted ? 'checkmark' : isCurrent ? 'play' : 'lock-closed'}
            size={isCurrent ? 16 : 15}
            color={
              isCompleted
                ? COLORS.primary
                : isCurrent
                  ? COLORS.textPrimary
                  : COLORS.border
            }
          />
        </View>

        <View style={styles.trailLabelBox}>
          <Text
            style={[
              styles.trailTitle,
              !isCompleted && !isCurrent && styles.lockedTitle,
            ]}
            numberOfLines={2}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function CourseProgressScreen() {
  
  const trail: TrailItemProps[] = [
    { title: 'O que é voto branco?', status: 'completo' },
    { title: 'O que é voto nulo?', status: 'completo' },
    { title: 'Influência nos resultados', status: 'atual' },
    {
      title: 'O mito da anulação da eleição pelo voto nulo',
      status: 'trancado',
    },
    { title: 'Como funciona na prática?', status: 'trancado' },
    { title: 'Considerações finais', status: 'trancado', last: true },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        
        <View style={styles.topBar}>
          <TouchableOpacity
            onPress={() => router.push('/(tabs)/courses')}
            activeOpacity={0.8}
          >
            <Text style={styles.topAction}>← VOLTAR</Text>
          </TouchableOpacity>


          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.topAction}>COMPARTILHAR</Text>
          </TouchableOpacity>
        </View>

        {/* Título do curso e divisor. */}
        <View style={styles.headingBlock}>
          <Text style={styles.pageTitle}>VOTO NULO E VOTO BRANCO</Text>
          <View style={styles.headingDivider} />
        </View>

        {/* Card de descrição e progresso do curso. */}
        <View style={styles.summaryCard}>
          <Text style={styles.description}>
            Conceitos, Diferenças e Efeitos no{`\n`}Processo Eleitoral Brasileiro
          </Text>

          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>PROGRESSO</Text>
            <Text style={styles.progressValue}>60%</Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Cabeçalho da trilha. */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>TRILHAS</Text>
          <View style={styles.sectionDivider} />
        </View>

        
        <View style={styles.timeline}>
          {trail.map((item) => (
            <TrailItem key={item.title} {...item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: SPACING.default,
    gap: SPACING.default,
    paddingBottom: 100,
  },


  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topAction: {
    color: COLORS.primary,
    fontSize: FONT_SIZE.xs,
    fontWeight: 'bold',
  },

  
  headingBlock: {
    gap: SPACING.xs,
  },
  pageTitle: {
    color: COLORS.primary,
    fontSize: FONT_SIZE.md,
    fontWeight: 'bold',
  },
  headingDivider: {
    height: BORDER_WIDTH.thick,
    backgroundColor: COLORS.primary,
  },

  
  summaryCard: {
    backgroundColor: COLORS.containerBackground,
    borderRadius: BORDER_RADIUS.default,
    borderColor: COLORS.border,
    borderWidth: BORDER_WIDTH.thin,
    padding: SPACING.default,
    gap: SPACING.sm,
  },
  description: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.xs,
    lineHeight: FONT_SIZE.sm,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.xs,
  },
  progressLabel: {
    color: COLORS.primary,
    fontSize: FONT_SIZE.xs,
    fontWeight: 'bold',
  },
  progressValue: {
    color: COLORS.primary,
    fontSize: FONT_SIZE.xs,
    fontWeight: 'bold',
  },
  progressTrack: {
    height: 8,
    backgroundColor: COLORS.textPrimary,
    borderRadius: BORDER_RADIUS.max,
    overflow: 'hidden',
  },
  progressFill: {
    width: '60%',
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.max,
  },

  
  sectionHeader: {
    gap: SPACING.xs,
  },
  sectionTitle: {
    color: COLORS.primary,
    fontSize: FONT_SIZE.sm,
    fontWeight: 'bold',
  },
  sectionDivider: {
    height: BORDER_WIDTH.thick,
    backgroundColor: COLORS.primary,
  },

  
  timeline: {
    paddingVertical: SPACING.sm,
  },
  trailItem: {
    minHeight: 58,
    position: 'relative',
  },
  timelineLine: {
    position: 'absolute',
    left: 31,
    top: 32,
    bottom: 0,
    width: 4,
    borderRadius: BORDER_RADIUS.max,
    backgroundColor: COLORS.secondary,
  },
  trailNodeArea: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  trailCircle: {
    width: 32,
    height: 32,
    borderRadius: BORDER_RADIUS.max,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SPACING.sm,
    flexShrink: 0,
  },
  completedCircle: {
    backgroundColor: COLORS.background,
    borderWidth: BORDER_WIDTH.thin,
    borderColor: COLORS.primary,
  },
  currentCircle: {
    backgroundColor: COLORS.primary,
    borderWidth: BORDER_WIDTH.thin,
    borderColor: COLORS.primary,
  },
  lockedCircle: {
    backgroundColor: COLORS.containerBackground,
    borderWidth: BORDER_WIDTH.thin,
    borderColor: COLORS.border,
  },
  trailLabelBox: {
    flex: 1,
    minHeight: 28,
    justifyContent: 'center',
    marginLeft: SPACING.sm,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    backgroundColor: COLORS.containerBackground,
    borderRadius: BORDER_RADIUS.default,
    borderWidth: BORDER_WIDTH.thin,
    borderColor: COLORS.border,
  },
  trailTitle: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.xs,
    fontWeight: 'bold',
  },
  lockedTitle: {
    color: COLORS.textSecondary,
    fontSize: FONT_SIZE.xs,
    fontWeight: 'bold',
  },
});
