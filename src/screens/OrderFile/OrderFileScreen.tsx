import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';

type Tab =
  | 'overview'
  | 'customer'
  | 'measure'
  | 'photos'
  | 'production'
  | 'installation'
  | 'material'
  | 'documents'
  | 'notes';

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'overview', label: 'Übersicht', icon: '📋' },
  { id: 'customer', label: 'Kunde', icon: '👤' },
  { id: 'measure', label: 'Aufmaß', icon: '📐' },
  { id: 'photos', label: 'Fotos', icon: '📷' },
  { id: 'production', label: 'Produktion', icon: '🏭' },
  { id: 'installation', label: 'Montage', icon: '🚚' },
  { id: 'material', label: 'Material', icon: '📦' },
  { id: 'documents', label: 'Dokumente', icon: '📄' },
  { id: 'notes', label: 'Notizen', icon: '💬' },
];

export default function OrderFileScreen() {
  const [tab, setTab] = useState<Tab>('overview');

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#F4F7FB' }}>
      <Header title="📁 Auftragsakte" subtitle="FF-2026-1001 · D&I Kozijnen" />

      <View style={card}>
        <Text style={orderNumber}>FF-2026-1001</Text>
        <Text style={customer}>D&I Kozijnen</Text>
        <Text style={muted}>📍 Bedburg-Hau</Text>
        <Text style={muted}>📅 Heute · 14:00</Text>

        <View style={statusBadge}>
          <Text style={statusText}>Aufmaß läuft</Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 14 }}>
        {tabs.map((item) => {
          const active = tab === item.id;

          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => setTab(item.id)}
              style={{
                backgroundColor: active ? '#0F172A' : '#FFFFFF',
                borderColor: active ? '#0F172A' : '#CBD5E1',
                borderWidth: 1,
                borderRadius: 14,
                paddingVertical: 10,
                paddingHorizontal: 14,
                marginRight: 8,
              }}
            >
              <Text
                style={{
                  color: active ? '#FFFFFF' : '#0F172A',
                  fontWeight: '900',
                }}
              >
                {item.icon} {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {tab === 'overview' && (
        <Section title="📋 Übersicht">
          <Info label="Status" value="Aufmaß läuft" />
          <Info label="Priorität" value="Normal" />
          <Info label="Monteur" value="Ireneusz" />
          <Info label="Termin" value="Heute · 14:00" />
          <Button text="Aufmaß starten" color="#16A34A" />
          <Button text="PDF erstellen" color="#334155" />
        </Section>
      )}

      {tab === 'customer' && (
        <Section title="👤 Kunde">
          <Info label="Firma" value="D&I Kozijnen" />
          <Info label="Ansprechpartner" value="Ireneusz Skoczykowski" />
          <Info label="Telefon" value="0178 3846478" />
          <Info label="Adresse" value="Bedburg-Hau" />
          <Button text="Anrufen" color="#16A34A" />
          <Button text="Google Maps öffnen" color="#F97316" />
        </Section>
      )}

      {tab === 'measure' && (
        <Section title="📐 Aufmaß">
          <Info label="Elemente" value="3 Fenster" />
          <Info label="Bosch" value="UniversalDistance 40C vorbereitet" />
          <Info label="Letztes Maß" value="1234 mm" />
          <Button text="Bosch verbinden" color="#16A34A" />
          <Button text="Neues Fenster hinzufügen" color="#2563EB" />
        </Section>
      )}

      {tab === 'photos' && (
        <Section title="📷 Fotos">
          <Info label="Vorher-Fotos" value="0" />
          <Info label="Detail-Fotos" value="0" />
          <Info label="Nachher-Fotos" value="0" />
          <Button text="Foto aufnehmen" color="#2563EB" />
          <Button text="Foto hochladen" color="#0EA5E9" />
        </Section>
      )}

      {tab === 'production' && (
        <Section title="🏭 Produktion">
          <Info label="Status" value="Offen" />
          <Info label="Zeichnung" value="Nicht erstellt" />
          <Info label="Material" value="Noch nicht reserviert" />
          <Button text="Produktion starten" color="#7C3AED" />
        </Section>
      )}

      {tab === 'installation' && (
        <Section title="🚚 Montage">
          <Info label="Termin" value="Noch nicht geplant" />
          <Info label="Checkliste" value="0 / 8 erledigt" />
          <Info label="Unterschrift" value="Fehlt" />
          <Button text="Montage planen" color="#F97316" />
        </Section>
      )}

      {tab === 'material' && (
        <Section title="📦 Material">
          <Info label="Profile" value="Noch nicht reserviert" />
          <Info label="Lagerplatz" value="-" />
          <Info label="Fehlteile" value="Keine Daten" />
          <Button text="Material aus Lager wählen" color="#2563EB" />
        </Section>
      )}

      {tab === 'documents' && (
        <Section title="📄 Dokumente">
          <Info label="Aufmaß-PDF" value="Nicht erstellt" />
          <Info label="Angebot" value="Nicht erstellt" />
          <Info label="Montagebericht" value="Nicht erstellt" />
          <Button text="PDF erstellen" color="#334155" />
        </Section>
      )}

      {tab === 'notes' && (
        <Section title="💬 Notizen">
          <Info label="Interne Notiz" value="Noch keine Notiz vorhanden" />
          <Info label="KI-Hinweis" value="Fotoanalyse noch nicht gestartet" />
          <Button text="Notiz hinzufügen" color="#2563EB" />
        </Section>
      )}
    </ScrollView>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={card}>
      <Text style={sectionTitle}>{title}</Text>
      {children}
    </View>
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

function Button({ text, color }: { text: string; color: string }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        borderRadius: 14,
        padding: 14,
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

const orderNumber = {
  fontSize: 22,
  fontWeight: '900' as const,
  color: '#2563EB',
};

const customer = {
  fontSize: 20,
  fontWeight: '900' as const,
  color: '#0F172A',
  marginTop: 4,
};

const muted = {
  color: '#64748B',
  marginTop: 6,
};

const statusBadge = {
  backgroundColor: '#FEF3C7',
  borderRadius: 999,
  paddingHorizontal: 10,
  paddingVertical: 6,
  marginTop: 12,
  alignSelf: 'flex-start' as const,
};

const statusText = {
  color: '#92400E',
  fontWeight: '900' as const,
};

const sectionTitle = {
  fontSize: 22,
  fontWeight: '900' as const,
  marginBottom: 14,
};
