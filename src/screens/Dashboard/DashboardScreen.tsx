import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import DashboardCard from '../../components/DashboardCard';

export default function DashboardScreen() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const time = now.toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const date = now.toLocaleDateString('de-DE', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#F4F7FB' }}>
      <View
        style={{
          backgroundColor: '#0F172A',
          borderRadius: 26,
          padding: 24,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 36, fontWeight: '900' }}>
          FirmaFlow 2
        </Text>

        <Text style={{ color: '#CBD5E1', fontSize: 16, marginTop: 6 }}>
          Smart ERP for Window & Door Professionals
        </Text>

        <View
          style={{
            backgroundColor: '#1E293B',
            borderRadius: 18,
            padding: 16,
            marginTop: 18,
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 32, fontWeight: '900' }}>
            {time}
          </Text>
          <Text style={{ color: '#CBD5E1', marginTop: 4 }}>{date}</Text>
        </View>
      </View>

      <Text style={{ fontSize: 28, fontWeight: '900', marginBottom: 16 }}>
        🏠 Dashboard
      </Text>

      <DashboardCard
        emoji="📋"
        title="Aufträge"
        subtitle="Offene Arbeiten und Status"
        count={12}
        color="#2563EB"
      />

      <DashboardCard
        emoji="📐"
        title="Aufmaß Pro"
        subtitle="Bosch · Kamera · KI-Skizze"
        count={4}
        color="#16A34A"
      />

      <DashboardCard
        emoji="👥"
        title="Kunden"
        subtitle="Adressen · Telefon · Google Maps"
        count={38}
        color="#7C3AED"
      />

      <DashboardCard
        emoji="🚚"
        title="Montage"
        subtitle="Checklisten · Fotos · Unterschrift"
        count={5}
        color="#F97316"
      />

      <DashboardCard
        emoji="📦"
        title="Lager"
        subtitle="Material · QR-Code · Bestand"
        count={96}
        color="#0EA5E9"
      />

      <DashboardCard
        emoji="📅"
        title="Kalender"
        subtitle="Termine · Planung · Erinnerungen"
      />

      <DashboardCard
        emoji="⚙️"
        title="Einstellungen"
        subtitle="Sprache · Benutzer · Cloud"
      />
    </ScrollView>
  );
}
