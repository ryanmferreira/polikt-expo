import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import { useMemo } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


type TrailStatus = 'completed' | 'current' | 'locked';

type TrailItemProps = {
  title: string;
  status: TrailStatus;
  last?: boolean;
  onPress?: () => void;
};

function TrailItem({ title, status, last = false, onPress }: TrailItemProps) {

  const itemVisual = useMemo(() => {
    switch (status) {
      case 'completed':
        return {
          icon: 'checkmark' as const,
          circleStyle: styles.completedCircle,
          iconColor: COLORS.blue,
          titleStyle: styles.trailTitle,
        };
      case 'current':
        return {
          icon: 'play' as const,
          circleStyle: styles.currentCircle,
          iconColor: COLORS.white,
          titleStyle: styles.trailTitle,
        };
      default:
        return {
          icon: 'lock-closed' as const,
          circleStyle: styles.lockedCircle,
          iconColor: COLORS.lockedIcon,
          titleStyle: styles.lockedTitle,
        };
    }
  }, [status]);

  return (
    <View style={styles.trailItem}>
      
      {!last && <View style={styles.timelineLine} />}

      
      <Pressable
        accessibilityRole={status === 'locked' ? 'button' : 'link'}
        accessibilityLabel={title}
        disabled={status === 'locked'}
        onPress={onPress}
        style={({ pressed }) => [
          styles.trailNodeArea,
          pressed && status !== 'locked' ? styles.pressed : undefined,
        ]}
      >
        
        <View style={[styles.trailCircle, itemVisual.circleStyle]}>
          <Ionicons name={itemVisual.icon} size={status === 'current' ? 17 : 16} color={itemVisual.iconColor} />
        </View>

        
        <View style={styles.trailLabelBox}>
          <Text style={itemVisual.titleStyle} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}


const COLORS = {
  background: '#0B0B0B',
  panel: '#171717',
  card: '#1D1D1D',
  white: '#FFFFFF',
  text: '#F5F5F5',
  muted: '#BDBDBD',
  blue: '#66B2FF',
  blueStrong: '#4C9BEF',
  lockedIcon: '#4A4A4A',
  lockedText: '#E7E7E7',
  divider: '#62AEFF',
};

export default function CourseProgressScreen() {

  const trail = [
    { title: 'O que é voto branco?', status: 'completed' as const },
    { title: 'O que é voto nulo?', status: 'completed' as const },
    { title: 'Influência nos resultados', status: 'current' as const },
    { title: 'O mito da anulação da eleição pelo voto nulo', status: 'locked' as const },
    { title: 'Como funciona na prática?', status: 'locked' as const },
    { title: 'Considerações finais', status: 'locked' as const, last: true },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Status bar escura para manter o mesmo fundo da tela. */}
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Barra superior com as ações VOLTAR e COMPARTILHAR da referência. */}
        <View style={styles.topBar}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Voltar"
            onPress={() => router.back()}
            hitSlop={8}
          >
            <Text style={styles.topAction}>← VOLTAR</Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Compartilhar curso"
            hitSlop={8}
          >
            <Text style={styles.topAction}>COMPARTILHAR</Text>
          </Pressable>
        </View>

        {/* Título principal e divisor azul. */}
        <View style={styles.headingBlock}>
          <Text style={styles.pageTitle}>VOTO NULO E VOTO BRANCO</Text>
          <View style={styles.headingDivider} />
        </View>

        {/* Card de resumo do curso, seguindo a proporção compacta da imagem. */}
        <View style={styles.summaryCard}>
          <Text style={styles.description}>
            Conceitos, Diferenças e Efeitos no{`\n`}Processo Eleitoral Brasileiro
          </Text>

          {/* Cabeçalho da barra de progresso. */}
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>PROGRESSO</Text>
            <Text style={styles.progressValue}>60%</Text>
          </View>

          {/* Barra de progresso com 60% preenchidos. */}
          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Título da seção de trilhas e seu divisor. */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>TRILHAS</Text>
          <View style={styles.sectionDivider} />
        </View>

        {/* Trilha vertical de conteúdos. */}
        <View style={styles.timeline}>
          {trail.map((item, index) => (
            <TrailItem
              key={item.title}
              title={item.title}
              status={item.status}
              last={item.last}
              onPress={item.status !== 'locked' ? () => undefined : undefined}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Container principal: ocupa toda a tela e usa preto como fundo predominante.
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // Espaçamento geral da tela. O padding inferior deixa a última etapa respirando.
  scrollContent: {
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 34,
  },

  // Cabeçalho superior com as duas ações alinhadas nas extremidades.
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
    marginBottom: 14,
    backgroundColor: COLORS.background,
  },

  // Texto pequeno em azul, como na referência.
  topAction: {
    color: COLORS.blue,
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.2,
  },

  // Bloco do título principal.
  headingBlock: {
    marginBottom: 14,
  },

  pageTitle: {
    color: COLORS.blue,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '800',
    letterSpacing: 0.2,
  },

  // Divisor azul espesso abaixo do título.
  headingDivider: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.divider,
    marginTop: 7,
  },

  // Card escuro usado para a descrição e o progresso.
  summaryCard: {
    backgroundColor: COLORS.card,
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 18,
  },

  description: {
    color: COLORS.text,
    fontSize: 9,
    lineHeight: 12,
    marginBottom: 12,
  },

  // Linha que contém PROGRESSO e 60%.
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },

  progressLabel: {
    color: COLORS.blue,
    fontSize: 7,
    fontWeight: '800',
  },

  progressValue: {
    color: COLORS.blue,
    fontSize: 7,
    fontWeight: '800',
  },

  // Fundo branco da barra de progresso.
  progressTrack: {
    height: 6,
    borderRadius: 99,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
  },

  // Preenchimento azul correspondente a 60%.
  progressFill: {
    width: '60%',
    height: '100%',
    backgroundColor: COLORS.blue,
    borderRadius: 99,
  },

  // Cabeçalho da seção TRILHAS.
  sectionHeader: {
    marginBottom: 9,
  },

  sectionTitle: {
    color: COLORS.blue,
    fontSize: 10,
    fontWeight: '800',
    marginBottom: 5,
  },

  sectionDivider: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.divider,
  },

  // Área que contém a sequência vertical de etapas.
  timeline: {
    paddingTop: 10,
    paddingBottom: 4,
  },

  // Cada etapa possui altura suficiente para receber o título ao lado do círculo.
  trailItem: {
    minHeight: 49,
    position: 'relative',
  },

  // Linha vertical azul clara que conecta os círculos.
  timelineLine: {
    position: 'absolute',
    left: 28,
    top: 30,
    bottom: -2,
    width: 3,
    borderRadius: 4,
    backgroundColor: COLORS.blue,
  },

  // Área de toque da etapa.
  trailNodeArea: {
    minHeight: 43,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },

  // Pequena transparência visual ao pressionar etapas disponíveis.
  pressed: {
    opacity: 0.72,
  },

  // Base comum de todos os círculos da trilha.
  trailCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 14,
    flexShrink: 0,
  },

  // Estado concluído: círculo escuro com contorno azul.
  completedCircle: {
    backgroundColor: COLORS.background,
    borderWidth: 1.5,
    borderColor: COLORS.blue,
  },

  // Estado atual: círculo branco para destacar o botão de reprodução.
  currentCircle: {
    backgroundColor: COLORS.background,
    borderWidth: 1.5,
    borderColor: COLORS.white,
  },

  // Estado bloqueado: círculo cinza discreto.
  lockedCircle: {
    backgroundColor: '#232323',
    borderWidth: 1,
    borderColor: '#303030',
  },

  // Caixa escura do rótulo, usada para aproximar os cartões da referência.
  trailLabelBox: {
    flex: 1,
    minHeight: 24,
    justifyContent: 'center',
    marginLeft: 7,
    marginRight: 10,
    paddingHorizontal: 5,
    paddingVertical: 4,
    backgroundColor: COLORS.panel,
    borderRadius: 2,
  },

  // Texto normal das etapas concluídas e da etapa atual.
  trailTitle: {
    color: COLORS.text,
    fontSize: 7,
    lineHeight: 9,
    fontWeight: '600',
  },

  // Texto das etapas bloqueadas fica levemente mais apagado.
  lockedTitle: {
    color: COLORS.lockedText,
    fontSize: 7,
    lineHeight: 9,
    fontWeight: '600',
  },
});