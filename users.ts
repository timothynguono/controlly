export type User = {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Staff';
  status: 'active' | 'inactive';
  plan: 'Free' | 'Pro' | 'Business';
  lastLogin: string;
};

export const users: User[] = [
  {
    id: 1,
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    role: 'Admin',
    status: 'active',
    plan: 'Business',
    lastLogin: '2023-10-26T10:00:00Z',
  },
  {
    id: 2,
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    role: 'Staff',
    status: 'active',
    plan: 'Pro',
    lastLogin: '2023-10-25T14:30:00Z',
  },
  {
    id: 3,
    name: 'Esther Howard',
    email: 'esther.howard@example.com',
    role: 'Staff',
    status: 'inactive',
    plan: 'Free',
    lastLogin: '2023-09-15T11:20:00Z',
  },
  {
    id: 4,
    name: 'Jenny Wilson',
    email: 'jenny.wilson@example.com',
    role: 'Admin',
    status: 'active',
    plan: 'Business',
    lastLogin: '2023-10-26T09:05:00Z',
  },
];