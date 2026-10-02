import { GraduationCap, House, Megaphone, Search, User } from 'lucide-react-native';

import { Tabs } from 'expo-router';
import { View } from 'react-native';

import { THEME } from '../../constants/theme';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: THEME.colors.onPrimary,
                tabBarInactiveTintColor: THEME.colors.textMuted,
                tabBarStyle: {
                    backgroundColor: THEME.colors.navBar,
                    borderWidth: THEME.borderWidth.default,
                    borderColor: THEME.colors.border,
                    borderRadius: THEME.borderRadius.default,
                    height: 64,
                    position: 'absolute',
                    bottom: 8,
                    left: THEME.spacing.paddingStandard,
                    right: THEME.spacing.paddingStandard,
                    elevation: 0,
                    paddingBottom: 0,
                },
                tabBarItemStyle: {
                    height: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                tabBarIconStyle: {
                    marginTop: 0,
                },
            }} >

            {/* Home tab */}
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused ? { backgroundColor: THEME.colors.primary, paddingHorizontal: 8, paddingVertical: 8, borderRadius: THEME.borderRadius.default } : { paddingHorizontal: 8, paddingVertical: 8 }}>
                            <House size={22} color={color} />
                        </View>
                    ),
                }} />

            {/* Search tab */}
            <Tabs.Screen
                name="search"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused ? { backgroundColor: THEME.colors.primary, paddingHorizontal: 8, paddingVertical: 8, borderRadius: THEME.borderRadius.default } : { paddingHorizontal: 8, paddingVertical: 8 }}>
                            <Search size={22} color={color} />
                        </View>
                    ),
                }} />

            {/* Courses tab */}
            <Tabs.Screen
                name="courses"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused ? { backgroundColor: THEME.colors.primary, paddingHorizontal: 8, paddingVertical: 8, borderRadius: THEME.borderRadius.default } : { paddingHorizontal: 8, paddingVertical: 8 }}>
                            <GraduationCap size={22} color={color} />
                        </View>
                    ),
                }} />

            {/* Guides tab */}
            <Tabs.Screen
                name="guides"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused ? { backgroundColor: THEME.colors.primary, paddingHorizontal: 8, paddingVertical: 8, borderRadius: THEME.borderRadius.default } : { paddingHorizontal: 8, paddingVertical: 8 }}>
                            <Megaphone size={22} color={color} />
                        </View>
                    ),
                }} />

            {/* Profile tab */}
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused ? { backgroundColor: THEME.colors.primary, paddingHorizontal: 8, paddingVertical: 8, borderRadius: THEME.borderRadius.default } : { paddingHorizontal: 8, paddingVertical: 8 }}>
                            <User size={22} color={color} />
                        </View>
                    ),
                }} />
        </Tabs>
    );
}