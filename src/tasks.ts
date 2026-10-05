import type { Priority, Task, TaskFilter, TaskStatus, Team, User } from "./types.js";

// Implementuj všetky funkcie podľa README. Nemeň ich signatúry.
export function getUserLabel(user: User): string {
  throw new Error("Not implemented");
}

export function addMember(team: Team, user: User): Team {
  throw new Error("Not implemented");
}

export function getTeamMemberNames(team: Team): string[] {
  throw new Error("Not implemented");
}

export function assignTask(task: Task, userId: string): Task {
  throw new Error("Not implemented");
}

export function changeTaskStatus(task: Task, status: TaskStatus): Task {
  throw new Error("Not implemented");
}

export function getOpenTasks(tasks: Task[]): Task[] {
  throw new Error("Not implemented");
}

export function updateUser(user: User, changes: Partial<Omit<User, "id">>): User {
  throw new Error("Not implemented");
}

export function getUserSummary(user: Pick<User, "id" | "name">): string {
  throw new Error("Not implemented");
}

export function formatPriority(priority: Priority): string {
  throw new Error("Not implemented");
}

export function shoutUnknownValue(value: unknown): string {
  throw new Error("Not implemented");
}

export function filterTasks(tasks: Task[], filter: TaskFilter): Task[] {
  throw new Error("Not implemented");
}
