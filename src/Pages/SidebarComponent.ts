import ProjectListItemComponent from "../Component/ProjectListComponent";
import ProjectHelper from "../ProjectsHelper";
import MainComponent from "./MainComponent";

const deleteDialog = document.querySelector(
  "#delete-dialog"
) as HTMLDialogElement;
const deleteIdElem = document.querySelector(
  "#delete-form-id"
) as HTMLInputElement;
const allProjectsUl = document.querySelector("#all-projects") as HTMLElement;

export default function SidebarComponent(projectHelper: ProjectHelper) {
  allProjectsUl.replaceChildren();
  if (
    // @ts-ignore
    !projectHelper.list.find((x) => x.Id === projectHelper.idSelected) &&
    projectHelper.list.length != 0
  )
    projectHelper.idSelected = projectHelper.list[0].Id;

  const elem = projectHelper.list.map((x) => ({
    id: x.Id,
    text: x.Name,
    selected: x.Id == projectHelper.idSelected,
  }));

  ProjectListItemComponent({
    allProjectsUl,
    elem,
    handleChange(id) {
      deleteIdElem.value = id.toString();
      projectHelper.idSelected = id;
      MainComponent(projectHelper);
      SidebarComponent(projectHelper);
    },
    handleDelete(id) {
      projectHelper.idSelected = id;
      deleteDialog.showModal();
    },
  });
}
