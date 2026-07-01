import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import CustomersScreen from '../screens/Customers/CustomersScreen';
import OrdersScreen from '../screens/Orders/OrdersScreen';
import MeasureScreen from '../screens/Measure/MeasureScreen';
import ProductionScreen from '../screens/Production/ProductionScreen';
import InstallationScreen from '../screens/Installation/InstallationScreen';
import WarehouseScreen from '../screens/Warehouse/WarehouseScreen';
import CalendarScreen from '../screens/Calendar/CalendarScreen';
import TimeTrackingScreen from '../screens/TimeTracking/TimeTrackingScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import OrderFileScreen from '../screens/OrderFile/OrderFileScreen';

type Screen =
  | 'dashboard'
  | 'customers'
  | 'orders'
  | 'orderFile'
  | 'measure'
  | 'production'
  | 'installation'
  | 'warehouse'
  | 'calendar'
  | 'time'
  | 'settings';

const menu: { id: Screen; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
  { id: 'customers', label: 'Kunden', icon: '👥' },
  { id: 'orders', label: 'Aufträge', icon: '📋' },
  { id: 'orderFile', label: 'Akte', icon: '📁' },
  { id: 'measure', label: 'Aufmaß', icon: '📐' },
  { id: 'production', label: 'Produktion', icon: '🏭' },
  { id: 'installation', label: 'Montage', icon: '🚚' },
  { id: 'warehouse', label: 'Lager', icon: '📦' },
  { id: 'calendar', label: 'Kalender', icon: '📅' },
  { id: 'time', label: 'Zeit', icon: '⏱️' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
];

export default function AppNavigator() {
  const [screen, setScreen] = useState<Screen>('dashboard');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F7FB' }}>
      <StatusBar style="dark" />

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {screen === 'dashboard' && <DashboardScreen />}
          {screen === 'customers' && <CustomersScreen />}
          {screen === 'orders' && <OrdersScreen />}
          {screen === 'orderFile' && <OrderFileScreen />}
          {screen === 'measure' && <MeasureScreen />}
          {screen === 'production' && <ProductionScreen />}
          {screen === 'installation' && <InstallationScreen />}
          {screen === 'warehouse' && <WarehouseScreen />}
          {screen === 'calendar' && <CalendarScreen />}
          {screen === 'time' && <TimeTrackingScreen />}
          {screen === 'settings' && <SettingsScreen />}
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
