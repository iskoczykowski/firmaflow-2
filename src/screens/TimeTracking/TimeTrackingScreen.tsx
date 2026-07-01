import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';

const entries = [
  {
    id: '1',
    name: 'Ireneusz',
    date: 'Heute',
    start: '07:30',
    pause: '00:30',
    end: '-',
    status: 'Läuft',
    color: '#86EFAC',
  },
  {
    id: '2',
    name: 'Team 1',
    date: 'Gestern',
    start: '07:15',
    pause: '00:45',
    end: '16:20',
    status: 'Abgeschlossen',
    color: '#DBEAFE',
  },
];

export default function TimeTrackingScreen() {
  const [active, setActive] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#F4F7FB' }}>
      <Header title="⏱️ Zeiterfassung" subtitle="Arbeitszeit · Pause · Baustelle · Monteur" />

      <View style={card}>
        <Text style={sectionTitle}>Heute</Text>

        <View style={{ flexDirection: 'row', gap: 8 }}>
          <SmallButton
            text={active ? 'Läuft' : 'Kommen'}
            color={active ? '#16A34A' : '#2563EB'}
            onPress={() => setActive(true)}
          />
          <SmallButton text="Pause" color="#F97316" />
          <SmallButton text="Gehen" color="#334155" onPress={() => setActive(false)} />
        </View>

        <Text style={muted}>Status: {active ? 'Arbeitszeit läuft' : 'Nicht gestartet'}</Text>
      </View>

      {entries.map((entry) => (
        <View key={entry.id} style={card}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={nameText}>{entry.name}</Text>
              <Text style={muted}>📅 {entry.date}</Text>
            </View>

            <View style={[badge, { backgroundColor: entry.color }]}>
              <Text style={badgeText}>{entry.status}</Text>
            </View>
          </View>

          <Text style={muted}>🟢 Start: {entry.start}</Text>
          <Text style={muted}>🟡 Pause: {entry.pause}</Text>
          <Text style={muted}>🔴 Ende: {entry.end}</Text>

          <View style={{ flexDirection: 'row', gap: 8, marginTop: 14 }}>
            <SmallButton text="Bearbeiten" color="#2563EB" />
            <SmallButton text="PDF" color="#334155" />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

function SmallButton({
  text,
  color,
  onPress,
}: {
  text: string;
  color: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[smallButton, { backgroundColor: color }]}>
      <Text style={smallButtonText}>{text}</Text>
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

const nameText = {
  fontSize: 20,
  fontWeight: '900' as const,
  color: '#0F172A',
};

const muted = {
  color: '#64748B',
  marginTop: 6,
};

const badge = {
  borderRadius: 999,
  paddingHorizontal: 10,
  paddingVertical: 6,
  alignSelf: 'flex-start' as const,
};

const badgeText = {
  fontWeight: '900' as const,
  color: '#0F172A',
};

const smallButton = {
  borderRadius: 12,
  paddingVertical: 12,
  paddingHorizontal: 10,
  flex: 1,
};

const smallButtonText = {
  color: '#FFFFFF',
  fontWeight: '900' as const,
  textAlign: 'center' as const,
  fontSize: 12,
};
