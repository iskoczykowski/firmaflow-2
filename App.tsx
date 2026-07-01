import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F7FB' }}>
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Header */}
        <View
          style={{
            backgroundColor: '#0F172A',
            borderRadius: 24,
            padding: 24,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 36,
              fontWeight: 'bold',
            }}
          >
            FirmaFlow 2
          </Text>

          <Text
            style={{
              color: '#CBD5E1',
              marginTop: 6,
              fontSize: 16,
            }}
          >
            Smart ERP for Window & Door Professionals
          </Text>
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 16,
          }}
        >
          Dashboard
        </Text>

        <DashboardButton
          emoji="👥"
          title="Kunden"
          subtitle="Kundenverwaltung"
        />

        <DashboardButton
          emoji="📋"
          title="Aufträge"
          subtitle="Angebote · Produktion · Montage"
        />

        <DashboardButton
          emoji="📐"
          title="Aufmaß Pro"
          subtitle="Bosch · Kamera · KI"
        />

        <DashboardButton
          emoji="🏭"
          title="Produktion"
          subtitle="Fertigung & Status"
        />

        <DashboardButton
          emoji="🚚"
          title="Montage"
          subtitle="Checklisten & Fotos"
        />

        <DashboardButton
          emoji="📦"
          title="Lager"
          subtitle="Material & QR-Code"
        />

        <DashboardButton
          emoji="📅"
          title="Kalender"
          subtitle="Termine & Planung"
        />

        <DashboardButton
          emoji="⏱️"
          title="Zeiterfassung"
          subtitle="Arbeitszeiten"
        />

        <DashboardButton
          emoji="⚙️"
          title="Einstellungen"
          subtitle="Sprache · Benutzer · Cloud"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function DashboardButton({
  emoji,
  title,
  subtitle,
}: {
  emoji: string;
  title: string;
  subtitle: string;
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 18,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: '#E2E8F0',
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        {emoji} {title}
      </Text>

      <Text
        style={{
          color: '#64748B',
          marginTop: 4,
          fontSize: 15,
        }}
      >
        {subtitle}
      </Text>
    </TouchableOpacity>
  );
}
