export type Role = "USER" | "OWNER" | "AGENT" | "ADMIN";
export type Purpose = "RENT" | "SALE" | "LAND";

export const demoUsers = [
  { id: "u1", name: "Demo User", email: "user@propbd.com", password: "demo123", role: "USER" as Role, joined: "2026-04-12", status: "Active" },
  { id: "u2", name: "Nusrat Owner", email: "owner@propbd.com", password: "demo123", role: "OWNER" as Role, joined: "2026-03-22", status: "Active" },
  { id: "u3", name: "Rafi Agent", email: "agent@propbd.com", password: "demo123", role: "AGENT" as Role, joined: "2026-02-18", status: "Active" },
  { id: "u4", name: "Admin Manager", email: "admin@propbd.com", password: "demo123", role: "ADMIN" as Role, joined: "2025-12-03", status: "Active" },
  { id: "u5", name: "Sadia Rahman", email: "sadia@example.com", password: "demo123", role: "USER" as Role, joined: "2026-05-01", status: "Active" },
  { id: "u6", name: "Tanvir Hossain", email: "tanvir@example.com", password: "demo123", role: "OWNER" as Role, joined: "2026-04-28", status: "Active" },
  { id: "u7", name: "Maliha Karim", email: "maliha@example.com", password: "demo123", role: "AGENT" as Role, joined: "2026-04-19", status: "Active" },
  { id: "u8", name: "Farhan Ahmed", email: "farhan@example.com", password: "demo123", role: "USER" as Role, joined: "2026-03-11", status: "Suspended" },
];

export const roleDashboard: Record<Role, string> = {
  USER: "/dashboard",
  OWNER: "/owner",
  AGENT: "/agent",
  ADMIN: "/admin",
};

export function findDemoUser(login: string | undefined | null, password: string | undefined | null) {
  const normalizedLogin = login?.trim().toLowerCase();
  const normalizedPassword = password?.trim();

  if (!normalizedLogin || !normalizedPassword) return null;

  return demoUsers.find((user) => {
    if (!("password" in user) || user.password !== normalizedPassword) return false;
    const roleId = user.role.toLowerCase();
    return user.email.toLowerCase() === normalizedLogin || roleId === normalizedLogin;
  }) ?? null;
}

export const properties = [
  {
    title: "Gulshan Lakeview Apartment",
    slug: "gulshan-lakeview-apartment",
    price: "৳80,000/month",
    amount: 80000,
    purpose: "RENT" as Purpose,
    type: "Apartment",
    location: "Gulshan, Dhaka",
    area: 1850,
    bedrooms: 3,
    bathrooms: 3,
    floor: "8th",
    status: "PUBLISHED",
    description: "Premium apartment with lake-facing balcony, modern fittings, and quick access to diplomatic zone offices.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Lift", "Generator", "Parking", "Security", "Balcony"],
    ownerName: "Nusrat Owner",
    agentName: "Rafi Agent",
  },
  {
    title: "Banani Furnished Family Flat",
    slug: "banani-furnished-family-flat",
    price: "৳55,000/month",
    amount: 55000,
    purpose: "RENT" as Purpose,
    type: "Apartment",
    location: "Banani, Dhaka",
    area: 1450,
    bedrooms: 3,
    bathrooms: 2,
    floor: "5th",
    status: "PUBLISHED",
    description: "Ready-to-move furnished flat near schools, restaurants, and major business hubs.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Furnished", "Lift", "Gas", "CCTV"],
    ownerName: "Tanvir Hossain",
    agentName: "Rafi Agent",
  },
  {
    title: "Dhanmondi Compact Apartment",
    slug: "dhanmondi-compact-apartment",
    price: "৳25,000/month",
    amount: 25000,
    purpose: "RENT" as Purpose,
    type: "Apartment",
    location: "Dhanmondi, Dhaka",
    area: 950,
    bedrooms: 2,
    bathrooms: 2,
    floor: "3rd",
    status: "PUBLISHED",
    description: "Comfortable apartment for small families with quick access to hospitals and universities.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Lift", "Security", "Gas", "Water"],
    ownerName: "Nusrat Owner",
    agentName: "Maliha Karim",
  },
  {
    title: "Mirpur Modern Sale Apartment",
    slug: "mirpur-modern-sale-apartment",
    price: "৳60 lakh",
    amount: 6000000,
    purpose: "SALE" as Purpose,
    type: "Apartment",
    location: "Mirpur, Dhaka",
    area: 1250,
    bedrooms: 3,
    bathrooms: 3,
    floor: "6th",
    status: "PUBLISHED",
    description: "Newly completed apartment in a fast-growing residential zone with strong rental demand.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Parking", "Lift", "Community Hall", "Security"],
    ownerName: "Nusrat Owner",
    agentName: "Rafi Agent",
  },
  {
    title: "Uttara Premium Corner Flat",
    slug: "uttara-premium-corner-flat",
    price: "৳95 lakh",
    amount: 9500000,
    purpose: "SALE" as Purpose,
    type: "Apartment",
    location: "Uttara, Dhaka",
    area: 1680,
    bedrooms: 4,
    bathrooms: 4,
    floor: "10th",
    status: "PUBLISHED",
    description: "Bright corner unit close to metro rail, shopping, and schools in Sector 13.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Metro Nearby", "Parking", "Lift", "Generator"],
    ownerName: "Tanvir Hossain",
    agentName: "Maliha Karim",
  },
  {
    title: "Gazipur Residential Land Plot",
    slug: "gazipur-residential-land-plot",
    price: "৳25 lakh",
    amount: 2500000,
    purpose: "LAND" as Purpose,
    type: "Land Plot",
    location: "Gazipur",
    area: 2160,
    bedrooms: 0,
    bathrooms: 0,
    floor: "Ground",
    status: "PUBLISHED",
    description: "Clear-title residential plot in a planned community with installment purchase option.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Clear Title", "Road Access", "Utility Nearby"],
    ownerName: "Nusrat Owner",
    agentName: "Rafi Agent",
  },
  {
    title: "Savar Highway Adjacent Plot",
    slug: "savar-highway-adjacent-plot",
    price: "৳40 lakh",
    amount: 4000000,
    purpose: "LAND" as Purpose,
    type: "Land Plot",
    location: "Savar",
    area: 2880,
    bedrooms: 0,
    bathrooms: 0,
    floor: "Ground",
    status: "PUBLISHED",
    description: "Strategic plot near the highway, suitable for long-term residential investment.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Boundary Wall", "Road Access", "Mutation Done"],
    ownerName: "Tanvir Hossain",
    agentName: "Maliha Karim",
  },
  {
    title: "Motijheel Executive Office",
    slug: "motijheel-executive-office",
    price: "৳45,000/month",
    amount: 45000,
    purpose: "RENT" as Purpose,
    type: "Office Space",
    location: "Motijheel, Dhaka",
    area: 1100,
    bedrooms: 0,
    bathrooms: 2,
    floor: "12th",
    status: "PUBLISHED",
    description: "Efficient office space in Dhaka's commercial core with reception-ready layout.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Lift", "Generator", "Reception", "Fire Safety"],
    ownerName: "Nusrat Owner",
    agentName: "Rafi Agent",
  },
];

export const inquiries = [
  { user: "Sadia Rahman", property: "Gulshan Lakeview Apartment", message: "Is it available from next month?", date: "May 4, 2026", status: "New" },
  { user: "Farhan Ahmed", property: "Mirpur Modern Sale Apartment", message: "Can I see the legal documents?", date: "May 3, 2026", status: "Read" },
  { user: "Demo User", property: "Gazipur Residential Land Plot", message: "I want installment details.", date: "May 2, 2026", status: "Replied" },
  { user: "Sadia Rahman", property: "Banani Furnished Family Flat", message: "Is parking included?", date: "Apr 29, 2026", status: "New" },
  { user: "Tanvir Hossain", property: "Motijheel Executive Office", message: "Need a weekday visit slot.", date: "Apr 26, 2026", status: "Read" },
];

export const visitRequests = [
  { user: "Demo User", property: "Gulshan Lakeview Apartment", date: "May 12, 2026", time: "11:00 AM", status: "Pending" },
  { user: "Sadia Rahman", property: "Banani Furnished Family Flat", date: "May 14, 2026", time: "4:00 PM", status: "Confirmed" },
  { user: "Farhan Ahmed", property: "Uttara Premium Corner Flat", date: "May 16, 2026", time: "3:00 PM", status: "Pending" },
  { user: "Demo User", property: "Gazipur Residential Land Plot", date: "May 18, 2026", time: "10:30 AM", status: "Rejected" },
];

export const leads = [
  { user: "Sadia Rahman", property: "Gulshan Lakeview Apartment", status: "New", source: "Website", note: "Asked about move-in date", updated: "Today" },
  { user: "Farhan Ahmed", property: "Uttara Premium Corner Flat", status: "Contacted", source: "Facebook", note: "Budget confirmed", updated: "Yesterday" },
  { user: "Demo User", property: "Gazipur Residential Land Plot", status: "Visit Scheduled", source: "Referral", note: "Weekend visit", updated: "May 8" },
  { user: "Nabila Khan", property: "Mirpur Modern Sale Apartment", status: "Negotiation", source: "Website", note: "Price discussion", updated: "May 7" },
  { user: "Arif Islam", property: "Motijheel Executive Office", status: "Closed", source: "Agent Call", note: "Deal completed", updated: "May 5" },
  { user: "Tania Sultana", property: "Savar Highway Adjacent Plot", status: "New", source: "Website", note: "Needs title copy", updated: "May 4" },
];

export const landPurchases = [
  { buyer: "Demo User", property: "Gazipur Residential Land Plot", location: "Gazipur", totalPrice: "৳8,00,000", paid: "৳3,20,000", remaining: "৳4,80,000", installments: "3/8", status: "ACTIVE", ownership: "In Progress" },
  { buyer: "Arif Islam", property: "Savar Highway Adjacent Plot", location: "Savar", totalPrice: "৳10,00,000", paid: "৳10,00,000", remaining: "৳0", installments: "8/8", status: "COMPLETED", ownership: "Ownership Granted" },
];

export const installments = [
  { month: "Jan", dueDate: "Jan 10, 2026", amount: "৳1,06,667", status: "PAID" },
  { month: "Feb", dueDate: "Feb 10, 2026", amount: "৳1,06,667", status: "PAID" },
  { month: "Mar", dueDate: "Mar 10, 2026", amount: "৳1,06,666", status: "PAID" },
  { month: "Apr", dueDate: "Apr 10, 2026", amount: "৳96,000", status: "DUE" },
  { month: "May", dueDate: "May 10, 2026", amount: "৳96,000", status: "UPCOMING" },
  { month: "Jun", dueDate: "Jun 10, 2026", amount: "৳96,000", status: "UPCOMING" },
  { month: "Jul", dueDate: "Jul 10, 2026", amount: "৳96,000", status: "UPCOMING" },
  { month: "Aug", dueDate: "Aug 10, 2026", amount: "৳96,000", status: "UPCOMING" },
];

export const adminStats = {
  totalProperties: 47,
  pendingApproval: 12,
  usersThisWeek: 8,
  inquiriesThisMonth: 23,
  visitRequests: 14,
  landPurchases: 2,
  revenue: "৳3,20,000",
};

export const pendingProperties = [
  { title: "Bashundhara New Block Apartment", owner: "Tanvir Hossain", purpose: "SALE", submitted: "May 7, 2026", status: "Pending" },
  { title: "Mohammadpur Family Rental", owner: "Nusrat Owner", purpose: "RENT", submitted: "May 6, 2026", status: "Pending" },
  { title: "Keraniganj Future Plot", owner: "Rashed Properties", purpose: "LAND", submitted: "May 4, 2026", status: "Pending" },
];

export const listingChart = [
  { month: "Dec", listings: 4, users: 2 },
  { month: "Jan", listings: 7, users: 5 },
  { month: "Feb", listings: 5, users: 3 },
  { month: "Mar", listings: 9, users: 8 },
  { month: "Apr", listings: 6, users: 4 },
  { month: "May", listings: 12, users: 9 },
];
