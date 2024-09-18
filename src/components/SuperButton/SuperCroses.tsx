import { CrosesType } from "../../App";
import { ReactNode } from "react";

type Props = {
  croses: CrosesType[];
  children: ReactNode;
};
export const SuperCroses = ({ croses, children }: Props) => {
  return (
    <div>
      <ul>
        {croses.map((el) => {
          return (
            <li key={el.id}>
              <span>{el.id}-</span>
              <span>{el.size}-</span>
              <span>{el.model}</span>
            </li>
          );
        })}
      </ul>
      {children}
      <hr />
    </div>
  );
};
