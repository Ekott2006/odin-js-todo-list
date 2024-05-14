import SidebarComponent from "../Pages/SidebarComponent";
import ProjectHelper from "../ProjectsHelper";

const createDialog = document.querySelector(
  "#create-dialog"
) as HTMLDialogElement;
const allProjectsUl = document.querySelector("#all-projects") as HTMLElement;
const addProjectBtn = document.querySelector(
  "#add-project-button"
) as HTMLButtonElement;
const addProjectForm = document.querySelector(
  "#create-form"
) as HTMLFormElement;

export default function CreateProjectHandler(projectHelper: ProjectHelper) {
  addProjectForm.onreset = () => createDialog.close();
  addProjectForm.onsubmit = () => {
    const description = (
      document.querySelector("#create-project-form-desc") as HTMLTextAreaElement
    ).value;
    const title = (
      document.querySelector("#create-project-form-name") as HTMLInputElement
    ).value;
    projectHelper.addToProject(title, description);
    allProjectsUl.replaceChildren();
    SidebarComponent(projectHelper);
};

  addProjectBtn.onclick = () => {
    createDialog.showModal();
  };
}
