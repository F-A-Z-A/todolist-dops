import React, { ButtonHTMLAttributes } from "react";

// type Props = {
//   title: string;
//   onClick: () => void;
//   className?: string;
// };

type Props = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({ title, onClick, className }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};
