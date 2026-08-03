import Ionicons from '@react-native-vector-icons/ionicons';
import { Tabs } from 'expo-router';
import { BORDER_RADIUS, BORDER_WIDTH, COLORS, SPACING } from '../../constants/theme';

export default function TabLayout() {
  return (
    /* Navigation Bar */
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderWidth: BORDER_WIDTH.thick,
          borderColor: COLORS.primary,
          borderRadius: BORDER_RADIUS.default,
          marginHorizontal: SPACING.default,
          marginBottom: SPACING.md,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
        },
      }}
    >
      {/* Home Screen Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={26} color={color} />
          ),
        }}
      />

      {/* Search Screen Tab */}
      <Tabs.Screen
        name="search"
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={26} color={color} />
          ),
        }}
      />

      {/* Courses Screen Tab */}
      <Tabs.Screen
        name="courses"
        options={{
          title: 'Cursos',
          tabBarIcon: ({ color }) => (
            <Ionicons name="school" size={26} color={color} />
          ),
        }}
      />

      {/* Guide Screen Tab */}
      <Tabs.Screen
        name="guide"
        options={{
          title: 'Guia',
          tabBarIcon: ({ color }) => (
            <Ionicons name="megaphone" size={26} color={color} />
          ),
        }}
      />

      {/* Profile Screen Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}