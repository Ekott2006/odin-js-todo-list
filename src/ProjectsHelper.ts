import { Priority, Project } from "./Model";
import seedData from "./seedData";

export default class ProjectHelper {
  list: Project[] = [];
  idSelected: number = 0;
  storageKey: string = "projectList"; // Key for local storage

  constructor() {
    // Load data from local storage on initialization
    const storedData = localStorage.getItem(this.storageKey);
    if (!storedData) {
      this.list.push(seedData);
      this.saveToLocalStorage();
    }
    if (storedData) {
      this.list = JSON.parse(storedData);
      for (let index = 0; index < this.list.length; index++) {
        const project = this.list[index];
        console.log(project);
        for (let i = 0; i < project.CheckList.length; i++) {
          this.list[index].CheckList[i].DueDate = new Date(
            // @ts-ignore
            this.list[index].CheckList[i].DueDate
          );
        }
      }
    }
  }

  public addToProject(name: string, description: string) {
    this.list.push({
      Id: this.list.length,
      CheckList: [],
      Name: name,
      Description: description,
    });
    this.saveToLocalStorage();
  }

  public editProject(id: number, name: string, description: string) {
    const index = this.list.findIndex((x) => x.Id === id);
    if (index === -1) return;
    this.list[index] = {
      ...this.list[index],
      Name: name,
      Description: description,
    };
    this.saveToLocalStorage();
  }

  public deleteProject(id: number) {
    this.list = this.list.filter((x) => x.Id !== id);
    this.saveToLocalStorage();
  }

  public addToCheckList(
    id: number,
    title: string,
    description: string,
    dueDate: Date,
    priority: Priority
  ) {
    const index = this.list.findIndex((x) => x.Id === id);
    if (index === -1) return;
    this.list[index].CheckList.push({
      Id: this.list[index].CheckList.length,
      Title: title,
      Description: description,
      DueDate: dueDate,
      Priority: priority,
      IsCompleted: false,
    });
    this.saveToLocalStorage();
  }

  public deleteCheckList(id: number, checkListId: number) {
    const index = this.list.findIndex((x) => x.Id === id);
    if (index === -1) return;
    this.list[index].CheckList = this.list[index].CheckList.filter(
      (x) => x.Id !== checkListId
    );
    this.saveToLocalStorage();
  }

  public toggleCheckListItem(id: number, checkListId: number) {
    const index = this.list.findIndex((x) => x.Id === id);
    if (index === -1) return;
    const checkListIndex = this.list[index].CheckList.findIndex(
      (x) => x.Id === checkListId
    );
    if (checkListIndex === -1) return;
    this.list[index].CheckList[checkListIndex].IsCompleted =
      !this.list[index].CheckList[checkListIndex].IsCompleted;
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.list));
  }
}
