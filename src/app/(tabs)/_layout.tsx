import { GraduationCap, House, Megaphone, Search, User } from 'lucide-react-native';

import { Tabs } from 'expo-router';
import { Platform, StyleSheet, useWindowDimensions, View } from 'react-native';

import { THEME } from '../../constants/theme';

export default function TabLayout() {
    // Use the window dimensions to determine if the screen is wide enough
    const { width } = useWindowDimensions();

    // If the screen width is wide enough, use the sidebar
    const useSidebar = Platform.OS === 'web' && width >= 1024;

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarPosition: useSidebar ? 'left' : 'bottom',
                tabBarVariant: useSidebar ? 'material' : undefined,
                tabBarShowLabel: useSidebar,
                tabBarLabelPosition: useSidebar ? 'beside-icon' : undefined,
                tabBarActiveTintColor: THEME.colors.onPrimaryAlt,
                tabBarInactiveTintColor: THEME.colors.textMuted,
                tabBarStyle: {
                    backgroundColor: THEME.colors.navBar,
                    borderWidth: useSidebar ? 0 : THEME.borderWidth.default,
                    borderColor: THEME.colors.border,
                    borderRadius: useSidebar ? 0 : THEME.borderRadius.default,

                    ...(useSidebar ? {
                        minWidth: 128,
                        maxWidth: 256,
                        flexBasis: '20%',
                    } : {
                        height: 64,
                        position: 'absolute',
                        bottom: 8,
                        left: THEME.spacing.paddingStandard,
                        right: THEME.spacing.paddingStandard,
                    }),

                    elevation: 0,
                    paddingBottom: 0,
                },
                tabBarItemStyle: useSidebar ? {} : {
                    height: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                tabBarLabelStyle: useSidebar ? { marginLeft: THEME.spacing.gap } : undefined,
                tabBarIconStyle: {
                    marginTop: 0,
                },
            }} >

            {/* Home tab */}
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[navBarStyles.icon, useSidebar && navBarStyles.sidebarIcon, focused && navBarStyles.activeIcon,]}>

                            <House size={useSidebar ? 16 : 22} color={color} />
                        </View>
                    ),
                }} />

            {/* Search tab */}
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Buscar',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[navBarStyles.icon, useSidebar && navBarStyles.sidebarIcon, focused && navBarStyles.activeIcon]}>
                            <Search size={useSidebar ? 16 : 22} color={color} />
                        </View>
                    ),
                }} />

            {/* Courses tab */}
            <Tabs.Screen
                name="courses"
                options={{
                    title: 'Cursos',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[navBarStyles.icon, useSidebar && navBarStyles.sidebarIcon, focused && navBarStyles.activeIcon,]}>
                            <GraduationCap size={useSidebar ? 16 : 22} color={color} />
                        </View>
                    ),
                }} />

            {/* Guides tab */}
            <Tabs.Screen
                name="guides"
                options={{
                    title: 'Guias',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[navBarStyles.icon, useSidebar && navBarStyles.sidebarIcon, focused && navBarStyles.activeIcon,]}>
                            <Megaphone size={useSidebar ? 16 : 22} color={color} />
                        </View>
                    ),
                }} />

            {/* Profile tab */}
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[navBarStyles.icon, useSidebar && navBarStyles.sidebarIcon, focused && navBarStyles.activeIcon,]}>
                            <User size={useSidebar ? 16 : 22} color={color} />
                        </View>
                    ),
                }} />
        </Tabs>
    );
}

const navBarStyles = StyleSheet.create({
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderRadius: THEME.borderRadius.default,
    },
    sidebarIcon: {
        width: 24,
        height: 24,
        padding: 0,
        borderRadius: THEME.borderRadius.default,
    },
    activeIcon: {
        backgroundColor: THEME.colors.primary,
    },
});