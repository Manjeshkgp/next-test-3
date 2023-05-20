import { FC } from "react";
import clsx from "clsx";

interface SpanTextBtnProps {
  className?: string;
}

const SpanTextBtn: FC<SpanTextBtnProps> = ({ className }) => {
  const btnClass = clsx("p-3 rounded-full w-max", className);
  return <button className={btnClass}>Comming Soon</button>;
};

export default SpanTextBtn;
