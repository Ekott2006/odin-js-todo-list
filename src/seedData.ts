import { Priority } from "./Model"

const seedData = {
    Id: 0,
    Name: "Welcome",
    Description:
      "Welcome to my TODO App, It has some features like different color to show if a task is urgent or important, able to see the tasks. These is a guide to different combinations",
    CheckList: [
      {
        Id: 0,
        Title: "A Sample Text(Priority: Low)",
        Description: "An example showing a low priority Check list item",
        Priority: Priority.LOW,
        DueDate: new Date(),
        IsCompleted: false,
      },
      {
        Id: 1,
        Title: "A Sample Text(Priority: Medium)",
        Description:
          "An example showing a medium priority Check list item and is already completed",
        Priority: Priority.MEDIUM,
        DueDate: new Date(),
        IsCompleted: true,
      },
      {
        Id: 2,
        Title: "A Sample Text(Priority: High)",
        Description: "An example showing a high priority Check list item",
        Priority: Priority.HIGH,
        DueDate: new Date(),
        IsCompleted: false,
      },
      {
        Id: 3,
        Title: "A Sample Text(Priority: Urgent)",
        Description: "An example showing a URGENT priority Check list item",
        Priority: Priority.URGENT,
        DueDate: new Date(),
        IsCompleted: false,
      }
    ],
  }
export default seedData
