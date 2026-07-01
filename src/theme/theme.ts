export const colors = {
  bg: '#F4F7FB',
  card: '#FFFFFF',
  dark: '#0F172A',
  dark2: '#1E293B',
  text: '#0F172A',
  muted: '#64748B',
  border: '#E2E8F0',

  blue: '#2563EB',
  green: '#16A34A',
  purple: '#7C3AED',
  orange: '#F97316',
  red: '#EF4444',
  cyan: '#0EA5E9',
  yellow: '#FACC15',
};

export const spacing = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,
};

export const radius = {
  sm: 12,
  md: 16,
  lg: 18,
  xl: 26,
};

export const shadows = {
  card: {
    shadowColor: '#0F172A',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
};

export const statusColors = {
  open: '#FCA5A5',
  inProgress: '#FACC15',
  ready: '#86EFAC',
  installation: '#60A5FA',
  done: '#86EFAC',
  problem: '#EF4444',
};

export const cardStyle = {
  backgroundColor: colors.card,
  borderRadius: radius.lg,
  padding: 16,
  marginBottom: 14,
  borderWidth: 1,
  borderColor: colors.border,
};

export const primaryButton = {
  backgroundColor: colors.blue,
  borderRadius: radius.md,
  padding: 14,
};

export const buttonText = {
  color: '#FFFFFF',
  fontWeight: '900' as const,
  textAlign: 'center' as const,
};

export const title = {
  fontSize: 28,
  fontWeight: '900' as const,
  color: colors.text,
};

export const subtitle = {
  color: colors.muted,
  marginTop: 4,
};
