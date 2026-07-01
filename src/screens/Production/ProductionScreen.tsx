import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';

const jobs = [
  {
    id: '1',
    order: 'FF-2026-1001',
    customer: 'D&I Kozijnen',
    item: 'Fenster Wohnzimmer',
    status: 'In Bearbeitung',
    color: '#FACC15',
  },
  {
    id: '2',
    order: 'FF-2026-1002',
    customer: 'Kunde Muster',
    item: 'Haustür Anthrazit',
    status: 'Fertig',
    color: '#86EFAC',
  },
  {
    id: '3',
    order: 'FF-2026-1003',
    customer: 'Privatkunde Neubau',
    item: 'Schiebetür Terrasse',
    status: 'Offen',
    color: '#FCA5A5',
  },
];

export default function ProductionScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#F4F7FB' }}>
      <Header title="🏭 Produktion" subtitle="Fertigung · Status · Zeichnungen · Notizen" />

      <TouchableOpacity style={primaryButton}>
        <Text style={primaryButtonText}>+ Neuer Produktionsauftrag</Text>
      </TouchableOpacity>

      {jobs.map((job) => (
        <View key={job.id} style={card}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={orderText}>{job.order}</Text>
              <Text style={customerText}>{job.customer}</Text>
              <Text style={muted}>🪟 {job.item}</Text>
            </View>

            <View style={[badge, { backgroundColor: job.color }]}>
              <Text style={badgeText}>{job.status}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', gap: 8, marginTop: 14 }}>
            <SmallButton text="Zeichnung" color="#2563EB" />
            <SmallButton text="Material" color="#7C3AED" />
            <SmallButton text="Fertig" color="#16A34A" />
          </View>

          <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
            <SmallButton text="Notiz" color="#F97316" />
            <SmallButton text="Foto" color="#0EA5E9" />
            <SmallButton text="PDF" color="#334155" />
          </View>
        </View>
      ))}
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

const orderText = {
  fontSize: 20,
  fontWeight: '900' as const,
  color: '#2563EB',
};

const customerText = {
  fontSize: 19,
  fontWeight: '900' as const,
  color: '#0F172A',
  marginTop: 4,
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
  paddingVertical: 10,
  paddingHorizontal: 10,
  flex: 1,
};

const smallButtonText = {
  color: '#FFFFFF',
  fontWeight: '900' as const,
  textAlign: 'center' as const,
  fontSize: 12,
};
