import { inlineForm, toDoList, toDoListItem } from "./components.js";
import $ from "create-element";
import { readToDos, writeToDo, initStorage } from "./storage.js";

export const toDoApp = () => {
  initStorage();
  const array = readToDos();
  const form = inlineForm((text) => {
    const toDo = { text, done: false };
    const storedToDo = writeToDo(toDo);
    list.append(toDoListItem(storedToDo));
  });
  const list = toDoList(array);
  return $("div", { className: "toDoApp" }, [form, list]);
};
