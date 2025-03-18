/** @format */

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
}

// Dummy customer data
export const dummyCustomers: Customer[] = [
  {
    id: "CUS001",
    name: "Allan Peterson",
    phone: "555-555-5220",
    email: "allan.peterson@example.com",
  },
  {
    id: "CUS002",
    name: "Sarah Johnson",
    phone: "555-555-1234",
    email: "sarah.johnson@example.com",
  },
  {
    id: "CUS003",
    name: "Michael Chen",
    phone: "555-555-5678",
    email: "michael.chen@example.com",
  },
  {
    id: "CUS004",
    name: "Emma Williams",
    phone: "555-555-9012",
    email: "emma.williams@example.com",
  },
  {
    id: "CUS005",
    name: "James Rodriguez",
    phone: "555-555-3456",
    email: "james.rodriguez@example.com",
  },
];
