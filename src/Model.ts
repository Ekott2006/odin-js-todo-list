export enum Priority {
  LOW,
  MEDIUM,
  HIGH,
  URGENT,
}

export interface Project {
  Id: number;
  Name: string;
  Description: string;
  CheckList: ChecklistItem[];
}

export interface ChecklistItem {
  Id: number;
  Title: string;
  Description: string;
  Priority: Priority;
  DueDate: Date;
  IsCompleted: boolean;
}
