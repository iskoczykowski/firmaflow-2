import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';

const customers = [
  {
    id: '1',
    name: 'D&I Kozijnen',
    contact: 'Ireneusz Skoczykowski',
    phone: '0178 3846478',
    city: 'Bedburg-Hau',
    status: 'Aktiv',
  },
  {
    id: '2',
    name: 'Kunde Muster',
    contact: 'Herr Jansen',
    phone: '+31 6 12345678',
    city: 'Nijmegen',
    status: 'Aufmaß offen',
  },
  {
    id: '3',
    name: 'Privatkunde Neubau',
    contact: 'Frau Peters',
    phone: '0151 55555555',
    city: 'Kleve',
    status: 'Angebot',
  },
];

export default function CustomersScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#F4F7FB' }}>
      <Header
        title="👥 Kunden"
        subtitle="CRM · Adressen · Ansprechpartner · Aufträge"
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
          + Neuer Kunde
        </Text>
      </TouchableOpacity>

      {customers.map((customer) => (
        <View
          key={customer.id}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 18,
            padding: 16,
            marginBottom: 14,
            borderWidth: 1,
            borderColor: '#E2E8F0',
          }}
        >
          <Text style={{ fontSize: 21, fontWeight: '900', color: '#0F172A' }}>
            {customer.name}
          </Text>

          <Text style={{ color: '#64748B', marginTop: 4 }}>
            👤 {customer.contact}
          </Text>

          <Text style={{ color: '#64748B', marginTop: 4 }}>
            📍 {customer.city}
          </Text>

          <Text style={{ color: '#64748B', marginTop: 4 }}>
            📞 {customer.phone}
          </Text>

          <View
            style={{
              backgroundColor: '#DBEAFE',
              borderRadius: 999,
              paddingHorizontal: 10,
              paddingVertical: 6,
              marginTop: 12,
              alignSelf: 'flex-start',
            }}
          >
            <Text style={{ color: '#1D4ED8', fontWeight: '900' }}>
              {customer.status}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', gap: 8, marginTop: 14 }}>
            <SmallButton text="Auftrag" color="#2563EB" />
            <SmallButton text="Aufmaß" color="#16A34A" />
            <SmallButton text="Maps" color="#F97316" />
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
        paddingHorizontal: 12,
        flex: 1,
      }}
    >
      <Text style={{ color: '#FFFFFF', fontWeight: '900', textAlign: 'center' }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
