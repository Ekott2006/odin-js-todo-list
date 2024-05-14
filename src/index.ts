import "./public/css/styles.css";
import "./public/css/reset.css";
//@ts-ignore
import Add from "./public/images/add_circle_outline_40dp.svg";
import ProjectHelper from "./ProjectsHelper";
import SidebarComponent from "./Pages/SidebarComponent";
import MainComponent from "./Pages/MainComponent";
import AddCheckListHandler from "./ModalHandler/AddCheckListHandler";
import CreateProjectHandler from "./ModalHandler/CreateProjectHandler";
import DeleteProjectHandler from "./ModalHandler/DeleteProjectHandler";
import EditProjectHandler from "./ModalHandler/EditProjectHandler";

const addImg = document.querySelector("#add") as HTMLImageElement;
addImg.src = Add;

const project = new ProjectHelper();
SidebarComponent(project);
MainComponent(project);
AddCheckListHandler(project)
CreateProjectHandler(project)
DeleteProjectHandler(project)
EditProjectHandler(project)