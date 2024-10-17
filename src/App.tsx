import React, { useEffect, useState } from "react";
import "./App.css";
import { Todolist } from "./Todolist";
import { v1 } from "uuid";

const dataFromServer: dataFromServerType[] = [
  {
    // todolistId: v1(),
    title: "What to learn",
    filter: "all",
    tasks: [
      { taskId: v1(), title: "HTML&CSS", isDone: true },
      { taskId: v1(), title: "JS", isDone: true },
    ],
    students: ["Kamal Broadhurst93", "Bianca Ferrell94", "Micheal Talbot95"],
  },
  {
    // todolistId: v1(),
    title: "What to do",
    filter: "all",
    tasks: [
      { taskId: v1(), title: "HTML&CSS2", isDone: true },
      { taskId: v1(), title: "JS2", isDone: true },
    ],
    students: ["Jago Wormald1", "Saul Milne2", "Aariz Hester3"],
  },
];

export type TaskType = {
  taskId: string;
  title: string;
  isDone: boolean;
};

export type dataFromServerType = {
  title: string;
  filter: FilterValuesType;
  tasks: TaskType[];
  students: string[];
};

export type TodolistType = {
  todolistId: string;
  title: string;
  filter: FilterValuesType;
  tasks: TaskType[];
  students: string[];
};

export type FilterValuesType = "all" | "active" | "completed";

function App() {
  const [todolists, setTodolists] = useState<TodolistType[]>([]);

  useEffect(() => {
    const todolists = dataFromServer.map((tl) => ({ ...tl, todolistId: v1() }));
    setTodolists(todolists);
  }, []);

  function removeTask(todolistId: string, taskId: string) {
    const newTodolists = todolists.map((tl) => {
      if (tl.todolistId === todolistId) {
        return { ...tl, tasks: tl.tasks.filter((t) => t.taskId !== taskId) };
      } else {
        return tl;
      }
    });
    setTodolists(newTodolists);
  }

  function addTask(todolistId: string, title: string) {
    const newTask: TaskType = { taskId: v1(), title: title, isDone: false };
    const newTodolists = todolists.map((tl) => {
      if (tl.todolistId === todolistId) {
        return { ...tl, tasks: [newTask, ...tl.tasks] };
      } else {
        return tl;
      }
    });
    setTodolists(newTodolists);
  }

  function changeTaskStatus(todolistId: string, taskId: string, isDone: boolean) {
    const newTodolists = todolists.map((tl) => {
      if (tl.todolistId === todolistId) {
        return {
          ...tl,
          tasks: tl.tasks.map((task) => (task.taskId === taskId ? { ...task, isDone } : task)),
        };
      } else {
        return tl;
      }
    });
    setTodolists(newTodolists);
  }

  function changeFilter(todolistId: string, filter: FilterValuesType) {
    const newTodolists = todolists.map((tl) => (tl.todolistId === todolistId ? { ...tl, filter } : tl));
    setTodolists(newTodolists);
  }

  function removeTodolist(todolistId: string) {
    const newTodolists = todolists.filter((tl) => {
      return tl.todolistId !== todolistId;
    });
    setTodolists(newTodolists);
  }

  return (
    <div className="App">
      {todolists.map((tl) => {
        return (
          <Todolist
            key={tl.todolistId}
            todolistId={tl.todolistId}
            title={tl.title}
            filter={tl.filter}
            tasks={tl.tasks}
            addTask={addTask}
            removeTask={removeTask}
            changeTaskStatus={changeTaskStatus}
            changeFilter={changeFilter}
            removeTodolist={removeTodolist}
          />
        );
      })}
    </div>
  );
}

export default App;
