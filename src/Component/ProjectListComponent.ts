// @ts-ignore
import Delete from "./../public/images/icons8-delete.svg";

const ProjectListItemComponent = (
  {allProjectsUl, elem, handleDelete, handleChange}: {allProjectsUl: HTMLElement,
  elem: { id: number, text: string; selected: boolean }[], handleDelete: ((id: number) => void),  handleChange: ((id: number) => void)}
) => {
  elem.forEach((x) => {
    const liElem = document.createElement("li");
    liElem.className = x.selected ? "list-item-selected" : "";
    liElem.onclick = () =>  handleChange(x.id)
    const p = document.createElement("p");
    p.textContent = x.text;
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-transparent";
    const deleteImg = document.createElement("img") as HTMLImageElement;
    deleteImg.src = Delete;
    deleteButton.onclick = () => handleDelete(x.id)

    deleteButton.appendChild(deleteImg);
    liElem.appendChild(p);
    liElem.appendChild(deleteButton);
    allProjectsUl?.appendChild(liElem);
  });
};

export default ProjectListItemComponent;
