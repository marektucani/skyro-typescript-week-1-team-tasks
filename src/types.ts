export type TaskStatus = "todo" | "in_progress" | "done";
export type Priority = "low" | "medium" | "high";

export interface User {
  id: string;
  name: string;
  email: string;
  nickname?: string;
}

export interface Admin extends User {
  permissions: string[];
}

export type Team = {
  id: string;
  name: string;
  members: User[];
  address: {
    city: string;
    postalCode: string;
  };
};

export type Task = {
  id: string;
  title: string;
  assigneeId: string | null;
  status: TaskStatus;
  priority: Priority;
};

export type TaskFilter = (task: Task) => boolean;
