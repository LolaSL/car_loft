"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/components";

const CustomButton: React.FC<CustomButtonProps> = ({
  isDisabled,
  btnType = "button",
  containerStyles = "",
  textStyles = "",
  title,
  rightIcon,
  handleClick,
}) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="arrow_left" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;