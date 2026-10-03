import { Bell, Search, X } from "lucide-react-native";

import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { THEME } from "../../constants/theme";

import { responsiveStyles } from "../../styles/responsiveStyles";
import { searchStyles } from "../../styles/searchStyles";

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("noticias");

  const recentSearches = ["Três poderes", "Município", "Projeto de Lei"];
  const trendingTopics = [
    "Política urbana",
    "Política urbana",
    "Projeto de Lei",
    "Transporte",
    "Cargos",
    "Eleições",
  ];

  return (
    <SafeAreaView style={searchStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, responsiveStyles.pageContent]}
      >
        {/* Header */}
        <View style={searchStyles.headerRow}>
          <Text style={searchStyles.headerTitle}>PESQUISAR</Text>

          {/* Notifications icon */}
          <TouchableOpacity activeOpacity={0.7}>
            <Bell size={26} color={THEME.colors.primary} />
          </TouchableOpacity>
        </View>

        <View style={searchStyles.mainDivider} />

        <Text style={searchStyles.subtitle}>O que você procura?</Text>

        {/* Search bar */}
        <View style={searchStyles.searchContainer}>
          <TextInput
            style={searchStyles.searchInput}
            placeholder="Pesquisar..."
            placeholderTextColor={THEME.colors.textMuted}
            underlineColorAndroid="transparent"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <View style={searchStyles.searchIcon}>
            <Search size={19} color={THEME.colors.primary} />
          </View>
        </View>

        {/* Filters by type */}
        <View style={searchStyles.filterRow}>
          <TouchableOpacity
            style={
              activeTab === "noticias"
                ? searchStyles.filterButtonActive
                : searchStyles.filterButtonInactive
            }
            onPress={() => setActiveTab("noticias")}
            activeOpacity={0.8}
          >
            <Text
              style={
                activeTab === "noticias"
                  ? searchStyles.filterTextActive
                  : searchStyles.filterTextInactive
              }
            >
              Notícias
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              activeTab === "cursos"
                ? searchStyles.filterButtonActive
                : searchStyles.filterButtonInactive
            }
            onPress={() => setActiveTab("cursos")}
            activeOpacity={0.8}
          >
            <Text
              style={
                activeTab === "cursos"
                  ? searchStyles.filterTextActive
                  : searchStyles.filterTextInactive
              }
            >
              Cursos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              activeTab === "guias"
                ? searchStyles.filterButtonActive
                : searchStyles.filterButtonInactive
            }
            onPress={() => setActiveTab("guias")}
            activeOpacity={0.8}
          >
            <Text
              style={
                activeTab === "guias"
                  ? searchStyles.filterTextActive
                  : searchStyles.filterTextInactive
              }
            >
              Guias
            </Text>
          </TouchableOpacity>
        </View>

        {/* Recent searches */}
        <View style={searchStyles.card}>
          <Text style={searchStyles.cardTitle}>PESQUISAS RECENTES</Text>

          <View style={searchStyles.cardDivider} />

          {/* // TODO: Implement recent searches */}
          {recentSearches.map((item, index) => (
            <View key={index} style={searchStyles.recentSearchItem}>
              <Text style={searchStyles.recentSearchText}>{item}</Text>

              <TouchableOpacity activeOpacity={0.6}>
                <X size={20} color={THEME.colors.text} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Trending topics */}
        <View style={searchStyles.card}>
          <Text style={searchStyles.cardTitle}>TÓPICOS EM ALTA</Text>

          <View style={searchStyles.cardDivider} />

          {/* // TODO: Implement trending topics */}
          <View style={searchStyles.topicsGrid}>
            {trendingTopics.map((topic, index) => (
              <TouchableOpacity
                key={index}
                style={searchStyles.topicCard}
                activeOpacity={0.7}
              >
                <Text style={searchStyles.topicText} numberOfLines={1}>
                  {topic}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
