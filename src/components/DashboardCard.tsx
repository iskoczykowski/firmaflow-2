import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type Props = {
  emoji: string;
  title: string;
  subtitle: string;
  count?: string | number;
  color?: string;
  onPress?: () => void;
};

export default function DashboardCard({
  emoji,
  title,
  subtitle,
  count,
  color = '#2563EB',
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 18,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: '#E2E8F0',
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 34 }}>{emoji}</Text>

        {count !== undefined && (
          <View
            style={{
              backgroundColor: color,
              borderRadius: 999,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Text style={{ color: '#FFFFFF', fontWeight: '900' }}>{count}</Text>
          </View>
        )}
      </View>

      <Text style={{ fontSize: 21, fontWeight: '900', marginTop: 10 }}>
        {title}
      </Text>

      <Text style={{ color: '#64748B', marginTop: 4, fontSize: 15 }}>
        {subtitle}
      </Text>
    </TouchableOpacity>
  );
}
