import { inlineForm, toDoList, toDoListItem } from "./components.js";
import $ from "create-element";
import { writeToDo, initStorage } from "./storage.js";
import  "./api.js";
import { readToDos } from "./api.js";
export const toDoApp = () => {
  initStorage();
  let array = readToDos();
  const form = inlineForm((text) => {
    const toDo = { text, done: false };
    const storedToDo = writeToDo(toDo);
    list.append(toDoListItem(storedToDo));
  });
  const list = toDoList(readToDos);
  return $("div", { className: "toDoApp" }, [form, list]);
};
