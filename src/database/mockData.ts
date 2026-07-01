import {
  AppUser,
  CalendarEvent,
  CompanySettings,
  Customer,
  InstallationJob,
  Order,
  ProductionJob,
  TimeEntry,
  WarehouseItem,
} from "../types";

export const company: CompanySettings = {
  id: "1",
  companyName: "D&I Kozijnen",
  primaryColor: "#0F172A",
  language: "de",
  country: "Deutschland",
  currency: "EUR",
};

export const users: AppUser[] = [
  {
    id: "1",
    name: "Ireneusz Skoczykowski",
    email: "admin@firmaflow.de",
    role: "admin",
    language: "de",
    active: true,
  },
];

export const customers: Customer[] = [];

export const orders: Order[] = [];

export const productionJobs: ProductionJob[] = [];

export const installationJobs: InstallationJob[] = [];

export const warehouse: WarehouseItem[] = [];

export const calendarEvents: CalendarEvent[] = [];

export const timeEntries: TimeEntry[] = [];
