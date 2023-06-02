import $ from "create-element";
import { update, deleteElement } from "./storage.js";

export const inlineForm = (onsubmit) => {
  const input = $("input", { className: "inlineInput" });
  const button = $("input", {
    type: "submit",
    value: "Add",
    className: "AddButton",
  });

  const inlineForm = $("form", {className: "inlineForm"} , [input, button]);

  inlineForm.onsubmit = (event) => {
    event.preventDefault();
    
    if (input.value.trim() !== "") {
      onsubmit(input.value);
    input.value = "";
    }
    
  };

  return inlineForm;
};

export const deleteToDoButton = (toDo, onDeleted) => {
  return $("button", {
    innerText: "x",
    className: "delete",
    onclick: (event) => {
      onDeleted();
      deleteElement(toDo);
    },
  });
};

export const toDoListItem = (toDo) => {
  const clickOnCheckBox = () => {
    toDo.done = !toDo.done;
    update(toDo);
  };

  const onDeleted = () => {
    domElement.remove();
  };

  const domElement = $("div", { className: "ToDoItem" }, [
    deleteToDoButton(toDo, onDeleted),
    $("span", toDo.text),
    $("input", {
      type: "checkbox",
      checked: toDo.done,
      className: "checkBox",
      onchange: clickOnCheckBox,
    }),
  ]);

  return domElement;
};

export const toDoList = (toDos) => {
  return $(
    "div",
    { className: "toDoList" },
    toDos.map((toDo) => toDoListItem(toDo))
  );
};
