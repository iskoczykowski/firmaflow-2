import React, { useMemo, useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as XLSX from 'xlsx';
import Header from '../../components/Header';

type StockItem = {
  id: string;
  profielnummer: string;
  benaming: string;
  meter: string;
  buitenkleur: string;
  binnenkleur: string;
  basiskleur: string;
  rubberkleur: string;
  containerVak: string;
  voorraad: string;
  gebruikt: string;
};

function clean(value: any) {
  return String(value ?? '').trim();
}

function findColumn(headers: string[], names: string[]) {
  return headers.findIndex((h) =>
    names.some((n) => h.toLowerCase().replace(/\s/g, '').includes(n.toLowerCase().replace(/\s/g, '')))
  );
}

export default function WarehouseScreen() {
  const [items, setItems] = useState<StockItem[]>([]);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();

    return items.filter((item) =>
      [
        item.profielnummer,
        item.benaming,
        item.buitenkleur,
        item.binnenkleur,
        item.basiskleur,
        item.rubberkleur,
        item.containerVak,
      ]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [items, search]);

  async function importExcel() {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'application/vnd.ms-excel',
        ],
        copyToCacheDirectory: true,
      });

      if (result.canceled || !result.assets?.[0]) return;

      const file = result.assets[0];

      const base64 = await FileSystem.readAsStringAsync(file.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const workbook = XLSX.read(base64, { type: 'base64' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const rows = XLSX.utils.sheet_to_json<any[]>(sheet, {
        header: 1,
        defval: '',
      });

      const headerIndex = rows.findIndex((row) =>
        row.some((cell) => clean(cell).toLowerCase().includes('profiel')) ||
        row.some((cell) => clean(cell).toLowerCase().includes('benaming'))
      );

      if (headerIndex === -1) {
        Alert.alert('Fehler', 'Keine passende Kopfzeile gefunden.');
        return;
      }

      const headers = rows[headerIndex].map((h) => clean(h));

      const cProfiel = findColumn(headers, ['profielnummer', 'profielnr', 'profiel']);
      const cBenaming = findColumn(headers, ['benaming', 'omschrijving']);
      const cMeter = findColumn(headers, ['meter', 'lengte']);
      const cBuiten = findColumn(headers, ['buitenkleur', 'buiten kleur', 'aussenfarbe']);
      const cBinnen = findColumn(headers, ['binnenkleur', 'binnen kleur', 'innenfarbe']);
      const cBasis = findColumn(headers, ['basiskleur', 'basis kleur']);
      const cRubber = findColumn(headers, ['rubberkleur', 'gummikleur', 'gummi']);
      const cVak = findColumn(headers, ['container vak', 'containervak', 'vak', 'lagerplatz']);
      const cVoorraad = findColumn(headers, ['voorraad', 'bestand']);
      const cGebruikt = findColumn(headers, ['gebruikt', 'verwendet']);

      const parsed: StockItem[] = rows
        .slice(headerIndex + 1)
        .map((row, index) => ({
          id: `${index}`,
          profielnummer: cProfiel >= 0 ? clean(row[cProfiel]) : '',
          benaming: cBenaming >= 0 ? clean(row[cBenaming]) : '',
          meter: cMeter >= 0 ? clean(row[cMeter]) : '',
          buitenkleur: cBuiten >= 0 ? clean(row[cBuiten]) : '',
          binnenkleur: cBinnen >= 0 ? clean(row[cBinnen]) : '',
          basiskleur: cBasis >= 0 ? clean(row[cBasis]) : '',
          rubberkleur: cRubber >= 0 ? clean(row[cRubber]) : '',
          containerVak: cVak >= 0 ? clean(row[cVak]) : '',
          voorraad: cVoorraad >= 0 ? clean(row[cVoorraad]) : '',
          gebruikt: cGebruikt >= 0 ? clean(row[cGebruikt]) : '',
        }))
        .filter((item) => item.profielnummer || item.benaming);

      setItems(parsed);

      Alert.alert('Import fertig', `${parsed.length} Lagerpositionen übernommen.`);
    } catch (error) {
      Alert.alert('Fehler', 'Excel-Datei konnte nicht importiert werden.');
    }
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#F4F7FB' }}>
      <Header title="📦 Lager" subtitle="Excel-Import · Profile · Container · Farben" />

      <TouchableOpacity
        onPress={importExcel}
        style={{
          backgroundColor: '#2563EB',
          borderRadius: 16,
          padding: 16,
          marginBottom: 12,
        }}
      >
        <Text style={{ color: '#FFFFFF', fontWeight: '900', textAlign: 'center' }}>
          Excel Lagerliste importieren
        </Text>
      </TouchableOpacity>

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Suche Profilnummer, Farbe, Benaming, Container..."
        style={{
          backgroundColor: '#FFFFFF',
          borderWidth: 1,
          borderColor: '#CBD5E1',
          borderRadius: 14,
          padding: 14,
          marginBottom: 14,
        }}
      />

      <View style={{ backgroundColor: '#0F172A', borderRadius: 18, padding: 16, marginBottom: 14 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: '900' }}>
          {filtered.length} Positionen
        </Text>
        <Text style={{ color: '#CBD5E1', marginTop: 4 }}>
          Importierte Lagerdaten aus Excel
        </Text>
      </View>

      {filtered.map((item) => (
        <View
          key={item.id}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 18,
            padding: 16,
            marginBottom: 14,
            borderWidth: 1,
            borderColor: '#E2E8F0',
          }}
        >
          <Text style={{ fontSize: 21, fontWeight: '900', color: '#2563EB' }}>
            Profil {item.profielnummer || '-'}
          </Text>

          <Text style={{ fontSize: 17, fontWeight: '900', color: '#0F172A', marginTop: 6 }}>
            {item.benaming || '-'}
          </Text>

          <Text style={muted}>📏 Meter: {item.meter || '-'}</Text>
          <Text style={muted}>🎨 Außen: {item.buitenkleur || '-'}</Text>
          <Text style={muted}>🎨 Innen: {item.binnenkleur || '-'}</Text>
          <Text style={muted}>⚙️ Basis: {item.basiskleur || '-'}</Text>
          <Text style={muted}>⚫ Gummi: {item.rubberkleur || '-'}</Text>
          <Text style={muted}>📍 Container/Vak: {item.containerVak || '-'}</Text>
          <Text style={muted}>📦 Voorraad: {item.voorraad || '-'}</Text>
          <Text style={muted}>🔧 Gebruikt: {item.gebruikt || '-'}</Text>

          <View style={{ flexDirection: 'row', gap: 8, marginTop: 14 }}>
            <SmallButton text="Reservieren" color="#16A34A" />
            <SmallButton text="Ausbuchen" color="#F97316" />
            <SmallButton text="QR" color="#2563EB" />
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

const muted = {
  color: '#64748B',
  marginTop: 6,
};
