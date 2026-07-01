import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('admin@firmaflow.de');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#F4F7FB', flexGrow: 1 }}>
      <View
        style={{
          backgroundColor: '#0F172A',
          borderRadius: 26,
          padding: 26,
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 38, fontWeight: '900' }}>
          FirmaFlow 2
        </Text>
        <Text style={{ color: '#CBD5E1', marginTop: 8, fontSize: 16 }}>
          Smart ERP for Window & Door Professionals
        </Text>
      </View>

      <View style={card}>
        <Text style={title}>🔐 Login</Text>

        <Text style={label}>E-Mail</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="email@firma.de"
          style={input}
        />

        <Text style={label}>Passwort</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Passwort"
          secureTextEntry
          style={input}
        />

        <TouchableOpacity style={primaryButton}>
          <Text style={primaryButtonText}>Einloggen</Text>
        </TouchableOpacity>

        <TouchableOpacity style={secondaryButton}>
          <Text style={secondaryButtonText}>Demo starten</Text>
        </TouchableOpacity>
      </View>

      <View style={card}>
        <Text style={sectionTitle}>🏢 Firma</Text>
        <Text style={muted}>D&I Kozijnen</Text>
        <Text style={muted}>Rolle: Admin / Monteur</Text>
        <Text style={muted}>Cloud-Anbindung wird später aktiviert.</Text>
      </View>
    </ScrollView>
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

const title = {
  fontSize: 26,
  fontWeight: '900' as const,
  marginBottom: 16,
};

const sectionTitle = {
  fontSize: 22,
  fontWeight: '900' as const,
  marginBottom: 10,
};

const label = {
  fontWeight: '900' as const,
  marginBottom: 6,
  marginTop: 10,
};

const input = {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#CBD5E1',
  borderRadius: 14,
  padding: 14,
  fontSize: 16,
};

const primaryButton = {
  backgroundColor: '#2563EB',
  borderRadius: 14,
  padding: 14,
  marginTop: 16,
};

const primaryButtonText = {
  color: '#FFFFFF',
  fontWeight: '900' as const,
  textAlign: 'center' as const,
};

const secondaryButton = {
  backgroundColor: '#0F172A',
  borderRadius: 14,
  padding: 14,
  marginTop: 10,
};

const secondaryButtonText = {
  color: '#FFFFFF',
  fontWeight: '900' as const,
  textAlign: 'center' as const,
};

const muted = {
  color: '#64748B',
  marginTop: 6,
};
