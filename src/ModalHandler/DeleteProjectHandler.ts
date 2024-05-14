import MainComponent from "../Pages/MainComponent";
import SidebarComponent from "../Pages/SidebarComponent";
import ProjectHelper from "../ProjectsHelper";

const deleteDialog = document.querySelector(
  "#delete-dialog"
) as HTMLDialogElement;
const deleteIdElem = document.querySelector(
  "#delete-form-id"
) as HTMLInputElement;
const deleteForm = document.querySelector("#delete-form") as HTMLFormElement;

export default function DeleteProjectHandler(projectHelper: ProjectHelper) {
  deleteForm.onreset = () => deleteDialog.close();
  deleteForm.onsubmit = () => {
    projectHelper.deleteProject(parseInt(deleteIdElem.value));
    SidebarComponent(projectHelper);
    MainComponent(projectHelper);
  };
}
