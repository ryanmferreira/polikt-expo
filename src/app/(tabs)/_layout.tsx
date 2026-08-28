import Ionicons from '@react-native-vector-icons/ionicons';

import { Tabs } from 'expo-router';
import { View } from 'react-native';

import { THEME } from '../../constants/theme';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: THEME.colors.white,
                tabBarInactiveTintColor: THEME.colors.contrast,
                tabBarStyle: {
                    backgroundColor: THEME.colors.background,
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
                            <Ionicons name="home" size={22} color={color} />
                        </View>
                    ),
                }} />

            {/* Search tab */}
            <Tabs.Screen
                name="search"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused ? { backgroundColor: THEME.colors.primary, paddingHorizontal: 8, paddingVertical: 8, borderRadius: THEME.borderRadius.default } : { paddingHorizontal: 8, paddingVertical: 8 }}>
                            <Ionicons name="search" size={22} color={color} />
                        </View>
                    ),
                }} />

            {/* Courses tab */}
            <Tabs.Screen
                name="courses"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused ? { backgroundColor: THEME.colors.primary, paddingHorizontal: 8, paddingVertical: 8, borderRadius: THEME.borderRadius.default } : { paddingHorizontal: 8, paddingVertical: 8 }}>
                            <Ionicons name="school" size={22} color={color} />
                        </View>
                    ),
                }} />

            {/* Guides tab */}
            <Tabs.Screen
                name="guides"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused ? { backgroundColor: THEME.colors.primary, paddingHorizontal: 8, paddingVertical: 8, borderRadius: THEME.borderRadius.default } : { paddingHorizontal: 8, paddingVertical: 8 }}>
                            <Ionicons name="megaphone" size={22} color={color} />
                        </View>
                    ),
                }} />

            {/* Profile tab */}
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused ? { backgroundColor: THEME.colors.primary, paddingHorizontal: 8, paddingVertical: 8, borderRadius: THEME.borderRadius.default } : { paddingHorizontal: 8, paddingVertical: 8 }}>
                            <Ionicons name="person" size={22} color={color} />
                        </View>
                    ),
                }} />
        </Tabs>
    );
}