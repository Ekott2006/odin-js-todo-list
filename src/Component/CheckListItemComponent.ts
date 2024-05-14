import { ChecklistItem, Priority } from "../Model";
//@ts-ignore
import Delete from "../public/images/icons8-delete.svg";

const ChecklistItemComponent = ({
  root,
  list,
  handleDelete,
  handleChange,
}: {
  root: HTMLElement;
  list: ChecklistItem[];
  handleDelete: (id: number) => void;
  handleChange: (id: number) => void;
}) => {
  list.forEach((x) => {
    const liElem = document.createElement("li");
    const divContainer = document.createElement("div");
    divContainer.className = "checklist-item";

    const input = document.createElement("input") as HTMLInputElement;
    input.type = "checkbox";
    input.checked = x.IsCompleted;
    input.onchange = () => handleChange(x.Id);

    const divElement = document.createElement("div");
    divElement.className = "project-holder";
    const pTitle = document.createElement("p");
    pTitle.className = "project-title";
    pTitle.textContent = x.Title;

    const pNotes = document.createElement("p");
    pNotes.className = "project-notes";
    pNotes.textContent = x.Description;

    const pDueDate = document.createElement("p");
    pDueDate.textContent = `Due Date: ${x.DueDate.toISOString().slice(0, 10)}`;
    pDueDate.className = "project-due-date";
    divElement.appendChild(pTitle);
    divElement.appendChild(pNotes);
    divElement.appendChild(pDueDate);

    const deleteButton = document.createElement("button");
    const deleteImg = document.createElement("img") as HTMLImageElement;
    deleteImg.src = Delete;
    deleteButton.onclick = () => handleDelete(x.Id);
    deleteButton.className = "btn btn-transparent project-delete";
    deleteButton.appendChild(deleteImg);

    const importantDiv = document.createElement("div");
    if (x.Priority === Priority.HIGH) importantDiv.className =  "take-action";
    if (x.Priority === Priority.URGENT) importantDiv.className = "take-action take-action-critical"

    divContainer.appendChild(input);
    divContainer.appendChild(divElement);
    divContainer.appendChild(deleteButton);
    liElem.appendChild(divContainer);
    if (x.Priority == Priority.HIGH || x.Priority == Priority.URGENT)
      liElem.appendChild(importantDiv);
    root?.appendChild(liElem);
  });
};

export default ChecklistItemComponent;
