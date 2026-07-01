import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';

const orders = [
  {
    id: '1',
    number: 'FF-2026-1001',
    customer: 'D&I Kozijnen',
    address: 'Bedburg-Hau',
    date: 'Heute, 14:00',
    fitter: 'Ireneusz',
    status: 'Aufmaß läuft',
    color: '#FACC15',
  },
  {
    id: '2',
    number: 'FF-2026-1002',
    customer: 'Kunde Muster',
    address: 'Nijmegen',
    date: 'Morgen, 09:00',
    fitter: 'Team 1',
    status: 'Montage',
    color: '#60A5FA',
  },
  {
    id: '3',
    number: 'FF-2026-1003',
    customer: 'Privatkunde Neubau',
    address: 'Kleve',
    date: 'Freitag, 11:30',
    fitter: 'Noch offen',
    status: 'Offen',
    color: '#F87171',
  },
];

export default function OrdersScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#F4F7FB' }}>
      <Header
        title="📋 Aufträge"
        subtitle="Aufmaß · Produktion · Montage · Status"
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#2563EB',
          borderRadius: 16,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: '#FFFFFF', fontWeight: '900', textAlign: 'center' }}>
          + Neuer Auftrag
        </Text>
      </TouchableOpacity>

      {orders.map((order) => (
        <View
          key={order.id}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 18,
            padding: 16,
            marginBottom: 14,
            borderWidth: 1,
            borderColor: '#E2E8F0',
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 20, fontWeight: '900', color: '#2563EB' }}>
                {order.number}
              </Text>

              <Text style={{ fontSize: 19, fontWeight: '900', color: '#0F172A', marginTop: 4 }}>
                {order.customer}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: order.color,
                borderRadius: 999,
                paddingHorizontal: 10,
                paddingVertical: 6,
                alignSelf: 'flex-start',
              }}
            >
              <Text style={{ fontWeight: '900', color: '#0F172A' }}>
                {order.status}
              </Text>
            </View>
          </View>

          <Text style={{ color: '#64748B', marginTop: 10 }}>📍 {order.address}</Text>
          <Text style={{ color: '#64748B', marginTop: 4 }}>📅 {order.date}</Text>
          <Text style={{ color: '#64748B', marginTop: 4 }}>👷 {order.fitter}</Text>

          <View style={{ flexDirection: 'row', gap: 8, marginTop: 14 }}>
            <SmallButton text="Aufmaß" color="#16A34A" />
            <SmallButton text="Produktion" color="#7C3AED" />
            <SmallButton text="Montage" color="#F97316" />
          </View>

          <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
            <SmallButton text="Fotos" color="#0EA5E9" />
            <SmallButton text="PDF" color="#334155" />
            <SmallButton text="Maps" color="#2563EB" />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

function SmallButton({ text, color }: { text: string; color: string }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flex: 1,
      }}
    >
      <Text style={{ color: '#FFFFFF', fontWeight: '900', textAlign: 'center', fontSize: 12 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
