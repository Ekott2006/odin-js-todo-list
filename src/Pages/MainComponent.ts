import ChecklistItemComponent from "../Component/CheckListItemComponent";
import ProjectHelper from "../ProjectsHelper";
//@ts-ignore
import Edit from "./../public/images/icons8-edit.svg";

const checkList = document.querySelector("#check-list") as HTMLUListElement;
const h1Elem = document.querySelector(
  "#project-intro-text"
) as HTMLHeadingElement;
const descElem = document.querySelector(
  "#project-intro-description"
) as HTMLParagraphElement;
export default function MainComponent(projectHelper: ProjectHelper) {
  checkList.replaceChildren();
  h1Elem.textContent = "";
  descElem.textContent = "";

  const project = projectHelper.list.find(
    (x) => x.Id == projectHelper.idSelected
  );
  if (!project) return;
  h1Elem.textContent = project.Name;
  descElem.textContent = project.Description;
  (document.querySelector("#edit-dialog-img") as HTMLImageElement).src = Edit;

  ChecklistItemComponent({
    root: checkList,
    list: project.CheckList,
    handleChange(id) {
      projectHelper.toggleCheckListItem(projectHelper.idSelected, id);
      MainComponent(projectHelper);
    },
    handleDelete(id) {
      projectHelper.deleteCheckList(projectHelper.idSelected, id);
      MainComponent(projectHelper);
    },
  });
}
