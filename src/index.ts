import type { Task, Team, User } from "./types.js";

const users: User[] = [
  { id: "u1", name: "Alex", email: "alex@example.com" },
  { id: "u2", name: "Sam", email: "sam@example.com", nickname: "Sami" }
];

const team: Team = {
  id: "t1",
  name: "Platform",
  members: users,
  address: { city: "Bratislava", postalCode: "811 01" }
};

const tasks: Task[] = [
  { id: "task1", title: "Nastaviť TypeScript", assigneeId: "u1", status: "done", priority: "high" },
  { id: "task2", title: "Napísať filtre", assigneeId: null, status: "todo", priority: "medium" }
];

console.log(`${team.name}: ${team.members.length} členovia`);
console.log(`Počet úloh: ${tasks.length}`);

// Implementácie riešení patria do src/tasks.ts.
