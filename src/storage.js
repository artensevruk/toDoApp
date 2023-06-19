const toDosKey = "toDos";
const nextIdKey = "nextId";

const writeId = (id) => {
  localStorage.setItem(nextIdKey, id);
};

export const readToDos = () => {
  return JSON.parse(localStorage.getItem(toDosKey)) || [];
};
export const initStorage = () => {
  if (!localStorage.hasOwnProperty(nextIdKey)) {
    writeId(0);
  }
};
export const updateToDo = (updatedToDo) => {
  const toDos = readToDos();
  const storedToDo = toDos.find((toDo) => toDo.id === updatedToDo.id);
  Object.assign(storedToDo, updatedToDo);
  writeJson(toDos);
};

const writeJson = (array) => {
  localStorage.setItem(toDosKey, JSON.stringify(array));
};

export const writeToDo = (toDo) => {
  const toDos = readToDos();
  let nextId = localStorage.getItem(nextIdKey);
  nextId = +nextId + 1;
  const storedToDo = {
    ...toDo,
    id: nextId,
  };
  writeId(nextId);
  toDos.push(storedToDo);
  writeJson(toDos);
  return storedToDo;
};

export const deleteToDo = (toDoId) => {
  const toDos = readToDos();
  const filtered = toDos.filter((toDo) => toDo.id !== toDoId);
  writeJson(filtered);
};
