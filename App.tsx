import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import DashboardScreen from './src/screens/Dashboard/DashboardScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F7FB' }}>
      <StatusBar style="dark" />
      <DashboardScreen />
    </SafeAreaView>
  );
}
