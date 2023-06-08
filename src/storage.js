const toDosKey = "toDos";
const nextIdKey = "nextId";

const writeId = (id) => {
  localStorage.setItem(nextIdKey, id);
};

export const readToDos = () => {
  const array = JSON.parse(localStorage.getItem(toDosKey)) || [];

  if (!localStorage.hasOwnProperty(nextIdKey)) {
    writeId(0);
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
  const storedToDo = {
    ...toDo,
    id: nextId,
  };
  writeId(nextId);
  array.push(storedToDo);
  writeJson(array);
  return storedToDo;
};

export const deleteToDo = (deleteElement) => {
  const array = readToDos();
 
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i].id !== deleteElement.id) {
  //     newArray.push(array[i]);
  //   }
  // }
 const filterArray = array.filter( toDo => toDo.id !== deleteElement.id );

  writeJson(filterArray);
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
