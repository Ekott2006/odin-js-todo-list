import MainComponent from "../Pages/MainComponent";
import ProjectHelper from "../ProjectsHelper";

const editDialogBtn = document.querySelector(
  "#edit-project-dialog-btn"
) as HTMLButtonElement;
const editDialog = document.querySelector("#edit-dialog") as HTMLDialogElement;
const editForm = document.querySelector("#edit-form") as HTMLFormElement;
const idElem = document.querySelector(
  "#edit-project-form-id"
) as HTMLInputElement;
const textareaElem = document.querySelector(
  "#edit-project-form-desc"
) as HTMLTextAreaElement;
const inputElem = document.querySelector(
  "#edit-project-form-name"
) as HTMLInputElement;

export default function EditProjectHandler(projectHelper: ProjectHelper) {

  editDialogBtn.onclick = () => {
    const project = projectHelper.list.find(
      (x) => x.Id == projectHelper.idSelected
    );
    if (!project) return;
  
    idElem.value = project.Id.toString();
    inputElem.value = project.Name;
    textareaElem.value = project.Description;
    editDialog.showModal();
  };
  editForm.onreset = () => editDialog.close();
  editForm.onsubmit = () => {
    const description = textareaElem.value;
    const title = inputElem.value;
    projectHelper.editProject(parseInt(idElem.value), title, description);
    editForm.reset();
    MainComponent(projectHelper);
  };
}
