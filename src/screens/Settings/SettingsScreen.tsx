import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';

type Lang = 'DE' | 'NL' | 'EN' | 'PL';

export default function SettingsScreen() {
  const [lang, setLang] = useState<Lang>('DE');
  const [darkMode, setDarkMode] = useState(false);
  const [offline, setOffline] = useState(true);

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#F4F7FB' }}>
      <Header title="⚙️ Einstellungen" subtitle="Sprache · Benutzer · Cloud · Offline-Modus" />

      <View style={card}>
        <Text style={sectionTitle}>🌍 Sprache</Text>

        <View style={{ flexDirection: 'row', gap: 8 }}>
          {(['DE', 'NL', 'EN', 'PL'] as Lang[]).map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setLang(item)}
              style={{
                flex: 1,
                backgroundColor: lang === item ? '#0F172A' : '#FFFFFF',
                borderColor: lang === item ? '#0F172A' : '#CBD5E1',
                borderWidth: 1,
                borderRadius: 12,
                padding: 12,
              }}
            >
              <Text
                style={{
                  color: lang === item ? '#FFFFFF' : '#0F172A',
                  textAlign: 'center',
                  fontWeight: '900',
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={card}>
        <Text style={sectionTitle}>👤 Benutzer</Text>
        <Info label="Firma" value="D&I Kozijnen" />
        <Info label="Benutzer" value="Ireneusz Skoczykowski" />
        <Info label="Rolle" value="Admin / Monteur" />
      </View>

      <View style={card}>
        <Text style={sectionTitle}>☁️ Synchronisation</Text>
        <Info label="Status" value="Cloud vorbereitet" />
        <Info label="Datenbank" value="Supabase geplant" />
        <Info label="Letzter Sync" value="Noch nicht verbunden" />

        <SmallButton text="Jetzt synchronisieren" color="#2563EB" />
      </View>

      <View style={card}>
        <Text style={sectionTitle}>📱 App-Modus</Text>

        <Toggle
          label="Offline-Modus"
          value={offline}
          onPress={() => setOffline(!offline)}
        />

        <Toggle
          label="Dunkler Modus"
          value={darkMode}
          onPress={() => setDarkMode(!darkMode)}
        />
      </View>

      <View style={card}>
        <Text style={sectionTitle}>📏 Geräte</Text>
        <Info label="Bosch Laser" value="UniversalDistance 40C vorbereitet" />
        <Info label="Kamera" value="Vorbereitet" />
        <Info label="PDF" value="Vorbereitet" />
      </View>

      <View style={card}>
        <Text style={sectionTitle}>ℹ️ FirmaFlow 2</Text>
        <Info label="Version" value="1.0.0" />
        <Info label="Build" value="Mobile Preview" />
      </View>
    </ScrollView>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ color: '#64748B', fontWeight: '700' }}>{label}</Text>
      <Text style={{ color: '#0F172A', fontWeight: '900', fontSize: 16 }}>{value}</Text>
    </View>
  );
}

function Toggle({
  label,
  value,
  onPress,
}: {
  label: string;
  value: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: value ? '#DCFCE7' : '#F1F5F9',
        borderRadius: 14,
        padding: 14,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: value ? '#16A34A' : '#CBD5E1',
      }}
    >
      <Text
        style={{
          color: value ? '#166534' : '#334155',
          fontWeight: '900',
          textAlign: 'center',
        }}
      >
        {value ? '✅ ' : '⬜ '}
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function SmallButton({ text, color }: { text: string; color: string }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginTop: 10,
      }}
    >
      <Text style={{ color: '#FFFFFF', fontWeight: '900', textAlign: 'center' }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const card = {
  backgroundColor: '#FFFFFF',
  borderRadius: 18,
  padding: 16,
  marginBottom: 14,
  borderWidth: 1,
  borderColor: '#E2E8F0',
};

const sectionTitle = {
  fontSize: 22,
  fontWeight: '900' as const,
  marginBottom: 14,
};
