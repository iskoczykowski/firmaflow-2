export type Language = 'de' | 'nl' | 'en' | 'pl';

export type UserRole = 'admin' | 'office' | 'fitter' | 'production';

export type OrderStatus =
  | 'open'
  | 'measure'
  | 'offer'
  | 'production'
  | 'ready'
  | 'installation'
  | 'done'
  | 'cancelled';

export type Priority = 'low' | 'normal' | 'high' | 'urgent';

export type Customer = {
  id: string;
  companyName: string;
  contactName: string;
  phone: string;
  email?: string;
  street: string;
  zip: string;
  city: string;
  country: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
};

export type Order = {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  address: string;
  status: OrderStatus;
  priority: Priority;
  fitterId?: string;
  fitterName?: string;
  appointmentDate?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
};

export type MeasureField =
  | 'width'
  | 'height'
  | 'depth'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'diagonal1'
  | 'diagonal2';

export type WindowType =
  | 'unknown'
  | 'turnTilt'
  | 'fixed'
  | 'slidingDoor'
  | 'frontDoor'
  | 'balconyDoor';

export type MeasureElement = {
  id: string;
  orderId: string;
  number: number;
  room: string;
  name: string;
  windowType: WindowType;
  wings: number;
  openingDirection?: string;
  profile?: string;
  colorInside?: string;
  colorOutside?: string;
  rollerShutter: boolean;
  windowSill: boolean;
  insectScreen: boolean;
  measurements: Record<MeasureField, number>;
  photos: string[];
  aiSketchText?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
};

export type ProductionJob = {
  id: string;
  orderId: string;
  orderNumber: string;
  customerName: string;
  itemName: string;
  status: 'open' | 'inProgress' | 'ready';
  drawings: string[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
};

export type InstallationJob = {
  id: string;
  orderId: string;
  orderNumber: string;
  customerName: string;
  address: string;
  appointmentDate: string;
  status: 'planned' | 'inProgress' | 'done' | 'problem';
  checklist: InstallationChecklistItem[];
  beforePhotos: string[];
  afterPhotos: string[];
  signature?: string;
  notes?: string;
};

export type InstallationChecklistItem = {
  id: string;
  label: string;
  done: boolean;
};

export type WarehouseItem = {
  id: string;
  profileNumber: string;
  name: string;
  meter?: string;
  outsideColor?: string;
  insideColor?: string;
  baseColor?: string;
  rubberColor?: string;
  containerPlace?: string;
  stock?: string;
  used?: string;
  notes?: string;
};

export type CalendarEvent = {
  id: string;
  title: string;
  customerName?: string;
  orderId?: string;
  type: 'measure' | 'installation' | 'production' | 'delivery' | 'other';
  startAt: string;
  endAt?: string;
  address?: string;
  notes?: string;
};

export type TimeEntry = {
  id: string;
  userId: string;
  userName: string;
  date: string;
  startTime: string;
  pauseMinutes: number;
  endTime?: string;
  orderId?: string;
  notes?: string;
};

export type AppUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  language: Language;
  active: boolean;
};

export type CompanySettings = {
  id: string;
  companyName: string;
  logoUrl?: string;
  primaryColor: string;
  language: Language;
  country: string;
  currency: string;
};
