import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import DashboardScreen from '../screens/Dashboard/DashboardScreen';

type Screen =
  | 'dashboard'
  | 'customers'
  | 'orders'
  | 'measure'
  | 'production'
  | 'installation'
  | 'warehouse'
  | 'calendar'
  | 'settings';

const menu: { id: Screen; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
  { id: 'customers', label: 'Kunden', icon: '👥' },
  { id: 'orders', label: 'Aufträge', icon: '📋' },
  { id: 'measure', label: 'Aufmaß', icon: '📐' },
  { id: 'production', label: 'Produktion', icon: '🏭' },
  { id: 'installation', label: 'Montage', icon: '🚚' },
  { id: 'warehouse', label: 'Lager', icon: '📦' },
  { id: 'calendar', label: 'Kalender', icon: '📅' },
  { id: 'settings', label: 'Einstellungen', icon: '⚙️' },
];

export default function AppNavigator() {
  const [screen, setScreen] = useState<Screen>('dashboard');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F7FB' }}>
      <StatusBar style="dark" />

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {screen === 'dashboard' && <DashboardScreen />}
          {screen !== 'dashboard' && (
            <ModulePlaceholder
              title={menu.find((m) => m.id === screen)?.label || 'Modul'}
              icon={menu.find((m) => m.id === screen)?.icon || '📦'}
            />
          )}
        </View>

        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderTopWidth: 1,
            borderTopColor: '#E2E8F0',
            paddingVertical: 8,
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 8 }}>
            {menu.map((item) => {
              const active = screen === item.id;

              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => setScreen(item.id)}
                  style={{
                    backgroundColor: active ? '#0F172A' : '#F8FAFC',
                    borderRadius: 16,
                    paddingVertical: 10,
                    paddingHorizontal: 14,
                    marginHorizontal: 4,
                    minWidth: 92,
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: active ? '#0F172A' : '#E2E8F0',
                  }}
                >
                  <Text style={{ fontSize: 22 }}>{item.icon}</Text>
                  <Text
                    style={{
                      color: active ? '#FFFFFF' : '#334155',
                      fontWeight: '900',
                      fontSize: 12,
                      marginTop: 3,
                    }}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

function ModulePlaceholder({ title, icon }: { title: string; icon: string }) {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View
        style={{
          backgroundColor: '#0F172A',
          borderRadius: 26,
          padding: 24,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 36, fontWeight: '900' }}>
          {icon} {title}
        </Text>
        <Text style={{ color: '#CBD5E1', fontSize: 16, marginTop: 6 }}>
          Dieses Modul bauen wir als nächstes aus.
        </Text>
      </View>
    </ScrollView>
  );
}
