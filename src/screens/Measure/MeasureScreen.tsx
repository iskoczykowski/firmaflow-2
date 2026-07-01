import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';

type Field = 'breite' | 'hoehe' | 'tiefe';

export default function MeasureScreen() {
  const [activeField, setActiveField] = useState<Field>('breite');
  const [measures, setMeasures] = useState({
    breite: '',
    hoehe: '',
    tiefe: '',
  });

  function setMeasure(value: string) {
    setMeasures((prev) => ({
      ...prev,
      [activeField]: value,
    }));
  }

  function testMeasure() {
    setMeasure('1234');
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#F4F7FB' }}>
      <Header title="📐 Aufmaß Pro" subtitle="Bosch · Kamera · KI-Skizze · PDF" />

      <View style={card}>
        <Text style={h2}>Aktives Messfeld</Text>

        <View style={{ flexDirection: 'row', gap: 8 }}>
          <FieldButton text="Breite" active={activeField === 'breite'} onPress={() => setActiveField('breite')} />
          <FieldButton text="Höhe" active={activeField === 'hoehe'} onPress={() => setActiveField('hoehe')} />
          <FieldButton text="Tiefe" active={activeField === 'tiefe'} onPress={() => setActiveField('tiefe')} />
        </View>
      </View>

      <View style={card}>
        <Text style={h2}>📏 Bosch UniversalDistance 40C</Text>
        <Text style={muted}>
          Expo Go: Testmessung. Development Build: echte Bluetooth-Verbindung.
        </Text>

        <Button text="Bosch verbinden" color="#16A34A" />
        <Button text="Testmessung 1234 mm übernehmen" color="#2563EB" onPress={testMeasure} />
      </View>

      <View style={card}>
        <Text style={h2}>📷 Foto</Text>
        <Button text="Foto aufnehmen" color="#2563EB" />
        <Button text="Foto hochladen" color="#0EA5E9" />
      </View>

      <View style={card}>
        <Text style={h2}>📐 Maße</Text>

        <MeasureInput label="Breite" value={measures.breite} onChangeText={(v) => setMeasures({ ...measures, breite: v })} />
        <MeasureInput label="Höhe" value={measures.hoehe} onChangeText={(v) => setMeasures({ ...measures, hoehe: v })} />
        <MeasureInput label="Tiefe" value={measures.tiefe} onChangeText={(v) => setMeasures({ ...measures, tiefe: v })} />
      </View>

      <View style={card}>
        <Text style={h2}>🤖 KI-Skizze</Text>
        <Button text="KI-Fotoanalyse starten" color="#7C3AED" />
        <Button text="Skizze erzeugen" color="#16A34A" />
      </View>

      <View style={card}>
        <Text style={h2}>📄 PDF</Text>
        <Button text="Aufmaß-PDF erstellen" color="#334155" />
      </View>
    </ScrollView>
  );
}

function FieldButton({ text, active, onPress }: { text: string; active: boolean; onPress: () => void }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        backgroundColor: active ? '#0F172A' : '#FFFFFF',
        borderColor: active ? '#0F172A' : '#CBD5E1',
        borderWidth: 1,
        borderRadius: 14,
        padding: 12,
      }}
    >
      <Text style={{ color: active ? '#FFFFFF' : '#0F172A', textAlign: 'center', fontWeight: '900' }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

function MeasureInput({
  label,
  value,
  onChangeText,
}: {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
}) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ fontWeight: '900', marginBottom: 6 }}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        placeholder="mm"
        style={{
          backgroundColor: '#FFFFFF',
          borderWidth: 1,
          borderColor: '#CBD5E1',
          borderRadius: 14,
          padding: 12,
          fontSize: 18,
          fontWeight: '900',
        }}
      />
    </View>
  );
}

function Button({ text, color, onPress }: { text: string; color: string; onPress?: () => void }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        borderRadius: 14,
        padding: 14,
        marginTop: 10,
      }}
    >
      <Text style={{ color: '#FFFFFF', textAlign: 'center', fontWeight: '900' }}>{text}</Text>
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

const h2 = {
  fontSize: 20,
  fontWeight: '900' as const,
  marginBottom: 10,
};

const muted = {
  color: '#64748B',
  marginBottom: 8,
};
