import { toDoList } from "./components.js";
export const readToDos = () => {
  return fetch("http://localhost:3000/")
    .then((response) => {
      return response.json();
    });
};


