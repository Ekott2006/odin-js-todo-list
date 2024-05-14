import MainComponent from "../Pages/MainComponent";
import ProjectHelper from "../ProjectsHelper";

const addChecklistForm = document.querySelector(
  "#create-checklist-form"
) as HTMLFormElement;
const createDialog = document.querySelector(
  "#create-checklist-dialog"
) as HTMLDialogElement;
const descriptionInput = document.querySelector(
    "#create-checklist-project-form-desc"
  ) as HTMLTextAreaElement
const titleInput =     document.querySelector(
      "#create-checklist-project-form-name"
    ) as HTMLInputElement
const dueDateInput = document.querySelector(
  "#create-checklist-project-form-due-date"
) as HTMLInputElement  

export default function AddCheckListHandler(projectHelper: ProjectHelper) {
  const project = projectHelper.list.find(
    (x) => x.Id == projectHelper.idSelected
  );
  if (!project) return;
  const selectElem = document.querySelector(
    "#create-checklist-project-form-priority"
  ) as HTMLSelectElement;
  addChecklistForm.onreset = () => createDialog.close();
  addChecklistForm.onsubmit = () => {
    const description = descriptionInput.value;
    const title = titleInput.value;
    const dueDate = dueDateInput.value;
    projectHelper.addToCheckList(
      project.Id,
      title,
      description,
      new Date(dueDate),
      parseInt(selectElem.options[selectElem.options.selectedIndex].value)
    );

    MainComponent(projectHelper);
    addChecklistForm.reset();
  };

  (document.querySelector("#create-checklist") as HTMLButtonElement).onclick =
    () => {
      createDialog.showModal();
    };
}
