import React from 'react';
import { View, Text } from 'react-native';

type HeaderProps = {
  title: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <View
      style={{
        backgroundColor: '#0F172A',
        borderRadius: 24,
        padding: 24,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 34,
          fontWeight: '900',
        }}
      >
        {title}
      </Text>

      {subtitle ? (
        <Text
          style={{
            color: '#CBD5E1',
            fontSize: 16,
            marginTop: 6,
          }}
        >
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}
