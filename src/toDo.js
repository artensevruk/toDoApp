import { inlineForm, toDoList, toDoListItem } from "./components.js";
import  $ from "create-element";
import { readToDos, writeToDo } from "./storage.js";


export const toDoApp = () => {
  let array = readToDos();
  const form = inlineForm((text) => {
    const toDo = { text , done: false };
    console.log(toDo.text.length)
    console.log(toDo.text[toDo.text.length-1])
    const storedToDo  =  writeToDo(toDo);
    const div = toDoListItem(storedToDo);
    list.append(div);
  });
  const list = toDoList(array);
  const div = $("div", { className: "toDoApp" }, [form, list]);
  return div;
};
