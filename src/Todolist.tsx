import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import { FilterValuesType, TaskType } from "./App";

type PropsType = {
  todolistId: string;
  title: string;
  filter: FilterValuesType;
  tasks: TaskType[];
  addTask: (todolistId: string, title: string) => void;
  removeTask: (todolistId: string, taskId: string) => void;
  changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void;
  changeFilter: (todolistId: string, value: FilterValuesType) => void;
  removeTodolist: (id: string) => void;
};

export function Todolist(props: PropsType) {
  let [title, setTitle] = useState("");
  let [error, setError] = useState<string | null>(null);

  const addTask = () => {
    let newTitle = title.trim();
    if (newTitle !== "") {
      props.addTask(props.todolistId, newTitle);
      setTitle("");
    } else {
      setError("Title is required");
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.charCode === 13) {
      addTask();
    }
  };

  const removeTodolist = () => props.removeTodolist(props.todolistId);

  const onAllClickHandler = () => props.changeFilter(props.todolistId, "all");
  const onActiveClickHandler = () => props.changeFilter(props.todolistId, "active");
  const onCompletedClickHandler = () => props.changeFilter(props.todolistId, "completed");

  const getTasksForTodolist = () => {
    let tasksForTodolist = props.tasks;
    if (props.filter === "active") {
      tasksForTodolist = tasksForTodolist.filter((t) => !t.isDone);
    }
    if (props.filter === "completed") {
      tasksForTodolist = tasksForTodolist.filter((t) => t.isDone);
    }
    return tasksForTodolist;
  };

  return (
    <div>
      <h3>
        {" "}
        {props.title}
        <button onClick={removeTodolist}>x</button>
      </h3>
      <div>
        <input
          value={title}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          className={error ? "error" : ""}
        />
        <button onClick={addTask}>+</button>
        {error && <div className="error-message">{error}</div>}
      </div>
      <ul>
        {getTasksForTodolist().map((t) => {
          const onClickHandler = () => props.removeTask(props.todolistId, t.taskId);
          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = e.currentTarget.checked;
            props.changeTaskStatus(props.todolistId, t.taskId, newIsDoneValue);
          };

          return (
            <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
              <input type="checkbox" onChange={onChangeHandler} checked={t.isDone} />
              <span>{t.title}</span>
              <button onClick={onClickHandler}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button className={props.filter === "all" ? "active-filter" : ""} onClick={onAllClickHandler}>
          All
        </button>
        <button className={props.filter === "active" ? "active-filter" : ""} onClick={onActiveClickHandler}>
          Active
        </button>
        <button className={props.filter === "completed" ? "active-filter" : ""} onClick={onCompletedClickHandler}>
          Completed
        </button>
      </div>
    </div>
  );
}
