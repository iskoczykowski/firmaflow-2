import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';

const events = [
  {
    id: '1',
    time: '08:00',
    title: 'Aufmaß · FF-2026-1001',
    customer: 'D&I Kozijnen',
    type: 'Aufmaß',
    color: '#16A34A',
  },
  {
    id: '2',
    time: '11:30',
    title: 'Montage · FF-2026-1002',
    customer: 'Kunde Muster',
    type: 'Montage',
    color: '#F97316',
  },
  {
    id: '3',
    time: '14:00',
    title: 'Produktion prüfen',
    customer: 'Privatkunde Neubau',
    type: 'Produktion',
    color: '#7C3AED',
  },
];

export default function CalendarScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#F4F7FB' }}>
      <Header title="📅 Kalender" subtitle="Termine · Planung · Montage · Aufmaß" />

      <TouchableOpacity style={primaryButton}>
        <Text style={primaryButtonText}>+ Neuer Termin</Text>
      </TouchableOpacity>

      <View style={card}>
        <Text style={sectionTitle}>Heute</Text>

        {events.map((event) => (
          <View key={event.id} style={eventRow}>
            <View style={[timeBox, { backgroundColor: event.color }]}>
              <Text style={timeText}>{event.time}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={eventTitle}>{event.title}</Text>
              <Text style={muted}>👤 {event.customer}</Text>
              <Text style={muted}>🏷️ {event.type}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={card}>
        <Text style={sectionTitle}>Schnellplanung</Text>

        <View style={{ flexDirection: 'row', gap: 8 }}>
          <SmallButton text="Aufmaß" color="#16A34A" />
          <SmallButton text="Montage" color="#F97316" />
          <SmallButton text="Lieferung" color="#2563EB" />
        </View>
      </View>
    </ScrollView>
  );
}

function SmallButton({ text, color }: { text: string; color: string }) {
  return (
    <TouchableOpacity style={[smallButton, { backgroundColor: color }]}>
      <Text style={smallButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const primaryButton = {
  backgroundColor: '#2563EB',
  borderRadius: 16,
  padding: 16,
  marginBottom: 16,
};

const primaryButtonText = {
  color: '#FFFFFF',
  fontWeight: '900' as const,
  textAlign: 'center' as const,
};

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

const eventRow = {
  flexDirection: 'row' as const,
  gap: 12,
  paddingVertical: 12,
  borderBottomWidth: 1,
  borderBottomColor: '#E2E8F0',
};

const timeBox = {
  width: 70,
  borderRadius: 14,
  paddingVertical: 10,
  alignItems: 'center' as const,
  alignSelf: 'flex-start' as const,
};

const timeText = {
  color: '#FFFFFF',
  fontWeight: '900' as const,
};

const eventTitle = {
  fontSize: 18,
  fontWeight: '900' as const,
  color: '#0F172A',
};

const muted = {
  color: '#64748B',
  marginTop: 4,
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
