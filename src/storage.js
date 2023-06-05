const toDosKey = "toDos";
const nextIdKey = "nextId";
export const readToDos = () => {
  const array = JSON.parse(localStorage.getItem(toDosKey)) || [];

  let nextId = 0;

  if (!localStorage.hasOwnProperty(nextIdKey)) {
    localStorage.setItem(nextIdKey, nextId);
  }

  return array;
};

export const updateToDo = (updatedToDo) => {
  const toDos = readToDos();
  // const storedToDoIndex = toDos.findIndex(storedToDo => storedToDo.id === updatedToDo.id)
  for (let i = 0; i < toDos.length; i++) {
    if (toDos[i].id === updatedToDo.id) {
      toDos[i] = updatedToDo;
      writeJson(toDos);
    }
  }
};

const writeJson = (array) => {
  localStorage.setItem(toDosKey, JSON.stringify(array));
};

export const writeToDo = (toDo) => {
  const array = readToDos();
  let nextId = localStorage.getItem(nextIdKey);
  nextId = +nextId + 1;
  toDo.id = nextId;
  localStorage.setItem(nextIdKey, nextId);

  array.push(toDo);
  writeJson(array);
};

export const deleteToDo = (deleteElement) => {
  const array = readToDos();
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].id !== deleteElement.id) {
      newArray.push(array[i]);
    }
  }
  writeJson(newArray);
};

// export function checkCheckbox(toDo) {
//   const array = readToDos();
//   const checkbox = document.querySelector("checkBox");
//   if (checkbox.checked) {

//     let nextId = localStorage.getItem(nextIdKey);

//     nextId = +nextId + 2;
//     toDo.id = nextId;
//     localStorage.setItem(nextIdKey, nextId);
//     console.log("Checkbox is checked");

//     array.push(toDo);
//     writeJson(array);
//   } else {
//     console.log("Checkbox is not checked");
//   }
// }
