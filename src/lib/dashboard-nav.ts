import {
  BarChart3Icon,
  Building2Icon,
  CalendarCheckIcon,
  ClipboardListIcon,
  CreditCardIcon,
  HeartIcon,
  HomeIcon,
  LandmarkIcon,
  MessageSquareIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

export const userNav = [
  { href: "/dashboard", label: "Overview", icon: HomeIcon },
  { href: "/dashboard/inquiries", label: "My Inquiries", icon: MessageSquareIcon },
  { href: "/dashboard/visit-requests", label: "My Visit Requests", icon: CalendarCheckIcon },
  { href: "/dashboard/land", label: "My Land", icon: LandmarkIcon },
  { href: "/dashboard", label: "Saved Properties", icon: HeartIcon },
  { href: "/dashboard", label: "Profile", icon: UserIcon },
];

export const ownerNav = [
  { href: "/owner", label: "Overview", icon: HomeIcon },
  { href: "/owner/properties", label: "My Properties", icon: Building2Icon },
  { href: "/owner/inquiries", label: "Inquiries", icon: MessageSquareIcon },
  { href: "/owner/visit-requests", label: "Visit Requests", icon: CalendarCheckIcon },
  { href: "/owner", label: "Deals", icon: CreditCardIcon },
];

export const agentNav = [
  { href: "/agent", label: "Overview", icon: HomeIcon },
  { href: "/agent", label: "Properties", icon: Building2Icon },
  { href: "/agent/leads", label: "Lead Pipeline", icon: ClipboardListIcon },
  { href: "/agent", label: "Visits", icon: CalendarCheckIcon },
  { href: "/agent/analytics", label: "Analytics", icon: BarChart3Icon },
];

export const adminNav = [
  { href: "/admin", label: "Overview", icon: HomeIcon },
  { href: "/admin/properties", label: "Properties", icon: Building2Icon },
  { href: "/admin/properties", label: "Pending Approvals", icon: ClipboardListIcon },
  { href: "/admin/users", label: "Users", icon: UsersIcon },
  { href: "/admin", label: "Inquiries", icon: MessageSquareIcon },
  { href: "/admin/land-purchases", label: "Land Purchases", icon: LandmarkIcon },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3Icon },
];
