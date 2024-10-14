import type { User } from "@/api/user/userModel";
import { Group } from "@/api/user/userModel"

export const users: User[] = [
  {
    id: 1,
    name: "Brandon",
    email: "brandon@google.com",
    group: Group.provider,
    createdAt: new Date(),
    updatedAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days later
  },
  {
    id: 2,
    name: "Robert",
    group: Group.client,
    email: "Robert@example.com",
    createdAt: new Date(),
    updatedAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days later
  },
];

export class UserRepository {
  async findAllAsync(): Promise<User[]> {
    return users;
  }

  async findByIdAsync(id: number): Promise<User | null> {
    return users.find((user) => user.id === id) || null;
  }
}
