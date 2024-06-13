/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-auto",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "phone-template-white-edges.png"
        }
        alt="dark-white"
        className=" pointer-events-none z-50  select-none"
      />
      <div className="absolute -z-10 inset-0">
        <img src={imgSrc} className=" object-cover" alt="imgSrc" />
      </div>
    </div>
  );
};

export default Phone;