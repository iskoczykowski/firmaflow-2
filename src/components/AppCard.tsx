import React from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { cardStyle } from "../theme/theme";

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
};

export default function AppCard({
  children,
  onPress,
  style,
}: Props) {
  if (onPress) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={[cardStyle, style]}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={[cardStyle, style]}>
      {children}
    </View>
  );
}
