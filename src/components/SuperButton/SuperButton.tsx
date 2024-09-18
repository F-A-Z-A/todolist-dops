import React, { ButtonHTMLAttributes } from "react";
import s from "./SuperButton.module.css";

// type SuperButtonProps = {
//   title?: string;
//   onClick: () => void;
//   children: ReactNode;
//   color: string;
// };

type ColorProps = {
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  color5?: string;
};

type SuperButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { backGround?: string } & Omit<
    ColorProps,
    "color4" | "color5"
  >;

export const SuperButton = (props: SuperButtonProps) => {
  const { title, onClick, children, className, disabled, color, ...restProps } = props;
  // const finalClassName = `
  //   ${s.button}
  //    ${color === "red" ? s.red : color === "secondary" ? s.secondary : s.default}
  //    ${disabled ? s.disabled : ""}
  //   `;

  const finalClassName = `
  ${s.button}
  ${color === "red" ? s.red : color === "secondary" ? s.secondary : s.default}
  ${disabled ? s.disabled : '"'}
  `;
  return (
    <button onClick={onClick} className={finalClassName}>
      {children}
    </button>
  );
};


// ---------------------------------------------------------------------------------
// type Props = {
//   title: string;
//   onClick: () => void;
// };
//
// export const SuperButton: React.FC<SuperButtonProps> = ({ title, onClick, children }) => {
//   return <button onClick={onClick}>{title}</button>;
// };