type TaskType = {
  taskId: number;
  title: string;
  isDone: boolean;
};
type DataType = {
  title: string;
  tasks: TaskType[];
  students: string[];
};
type TasksPropsType = {
  data: DataType;
};
export const Tasks = (props: TasksPropsType) => {
  return (
    <>
      <div>{props.data.title}</div>
      <ul>
        {props.data.tasks.map((t) => {
          return (
            <li key={t.taskId}>
              <span>{t.title}</span>
              <input type="checkbox" checked={t.isDone} />
            </li>
          );
        })}
      </ul>
      <ul>
        {props.data.students.map((s) => {
          return <li>{s}</li>;
        })}
      </ul>
    </>
  );
};
