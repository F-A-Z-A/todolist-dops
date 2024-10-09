import React, { useState } from "react";
import "./App.css";
import { Todolist } from "./Todolist";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "active" | "completed";
type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};
type TodolistsType = { id: string; title: string };
type TasksStateType = {
  [key: string]: InTaskType;
};
export type InTaskType = {
  data: TaskType[];
  filter: FilterValuesType;
};

function App() {
  const todolistId1 = v1();
  const todolistId2 = v1();

  const [todolists, setTodolists] = useState<TodolistsType[]>([
    { id: todolistId1, title: "What to learn" },
    { id: todolistId2, title: "What to buy" },
  ]);

  const [tasks, setTasks] = useState<TasksStateType>({
    [todolistId1]: {
      data: [
        { id: v1(), title: "HTML&CSS-1", isDone: true },
        { id: v1(), title: "JS-1", isDone: true },
      ],
      filter: "all",
    },
    [todolistId2]: {
      data: [
        { id: v1(), title: "HTML&CSS-2", isDone: true },
        { id: v1(), title: "JS-2", isDone: true },
      ],
      filter: "all",
    },
  });

  const removeTodolist = (todolistId: string) => {
    setTodolists(todolists.filter((el) => el.id !== todolistId));
    delete tasks[todolistId];
  };

  function removeTask(todolistId: string, taskId: string) {
    setTasks({
      ...tasks,
      [todolistId]: {
        ...tasks[todolistId],
        data: tasks[todolistId].data.filter((el) => el.id !== taskId),
      },
    });
  }

  function addTask(todolistId: string, title: string) {
    const newTask = { id: v1(), title: title, isDone: false };
    setTasks({
      ...tasks,
      [todolistId]: {
        ...tasks[todolistId],
        data: [newTask, ...tasks[todolistId].data],
      },
    });
  }

  function changeStatus(todolistId: string, taskId: string, newIsDone: boolean) {
    setTasks({
      ...tasks,
      [todolistId]: {
        ...tasks[todolistId],
        data: tasks[todolistId].data.map((t) => (t.id === taskId ? { ...t, isDone: newIsDone } : t)),
      },
    });
  }

  function changeFilter(todolistId: string, filter: FilterValuesType) {
    setTasks({
      ...tasks,
      [todolistId]: { ...tasks[todolistId], filter },
    });
  }

  return (
    <div className="App">
      {todolists.map((el) => {
        return (
          <Todolist
            key={el.id}
            todolistId={el.id}
            title={el.title}
            tasks={tasks[el.id].data}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={tasks[el.id].filter}
            removeTodolist={removeTodolist}
          />
        );
      })}
    </div>
  );
}

export default App;
