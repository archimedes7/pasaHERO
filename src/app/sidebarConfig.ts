// In a new file, e.g., sidebarConfig.ts
import {
  IconDashboard,
  IconCar,
  IconHistory,
  IconWallet,
  IconUser,
  IconBell,
  IconHelp,
  IconSettings,
  IconLogout,
} from "@tabler/icons-react";

import { Icon } from "@tabler/icons-react";

type LinkIcon = Icon;
type Link = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const passengerLinks: Link[] = [
  { label: "Dashboard", href: "/dashboard", icon: IconDashboard },
  { label: "Book a Ride", href: "/book-ride", icon: IconCar },
  { label: "Ride History", href: "/ride-history", icon: IconHistory },
  { label: "Wallet", href: "/wallet", icon: IconWallet },
  { label: "Profile", href: "/profile", icon: IconUser },
  { label: "Notifications", href: "/notifications", icon: IconBell },
  { label: "Support", href: "/support", icon: IconHelp },
  { label: "Settings", href: "/settings", icon: IconSettings },
  { label: "Logout", href: "/logout", icon: IconLogout },
];

export const driverLinks: Link[] = [
  { label: "Dashboard", href: "/driver/dashboard", icon: IconDashboard },
  { label: "Active Rides", href: "/driver/active-rides", icon: IconCar },
  { label: "Earnings", href: "/driver/earnings", icon: IconWallet },
  { label: "Schedule", href: "/driver/schedule", icon: IconHistory },
  { label: "Vehicle Info", href: "/driver/vehicle", icon: IconCar },
  { label: "Profile", href: "/driver/profile", icon: IconUser },
  { label: "Notifications", href: "/driver/notifications", icon: IconBell },
  { label: "Support", href: "/driver/support", icon: IconHelp },
  { label: "Settings", href: "/driver/settings", icon: IconSettings },
  { label: "Logout", href: "/driver/logout", icon: IconLogout },
];
