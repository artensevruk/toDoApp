import $ from "create-element";
import { updateToDo, deleteToDo } from "./storage.js";

export const inlineForm = (onsubmit) => {
  return $(
    "form",
    {
      className: "inlineForm",
      onsubmit: (event) => {
        event.preventDefault();

        const input = event.target.text;
        if (input.value.trim() !== "") {
          onsubmit(input.value);
          input.value = "";
        }
      },
    },
    [
      $("input", { className: "inlineInput", name: "text" , maxLength:"35"}),
      $("input", {
        type: "submit",
        value: "Add",
        className: "AddButton",
      }),
    ]
  );
};



export const deleteButton = (onDeleted) => {
  return $("button", {
    innerText: "x",
    className: "delete",
    onclick: (event) => {
      onDeleted();
    },
  });
};

export const toDoListItem = (toDo) => {
  const clickOnCheckBox = () => {
    toDo.done = !toDo.done;
    updateToDo(toDo);
  };

  const onDeleted = () => {
    deleteToDo(toDo.id);
    domElement.remove();
  };

  const domElement = $("div", { className: "ToDoItem" }, [
    deleteButton(onDeleted),
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