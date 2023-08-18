import { toDoApp } from "./toDo.js";
import "../index.scss";
console.time("d");
document.body.append(toDoApp());
console.timeEnd("d");
