import React from "react";

const TextField = ({
  className,
  placeholder,
}: {
  className?: string;
  placeholder?: string;
}) => {
  return (
    <input className={`${className}`} type="text" placeholder={placeholder} />
  );
};

export default TextField;
