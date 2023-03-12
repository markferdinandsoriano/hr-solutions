import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SelectField = ({
  label,
  optionsMenu,
  name,
  placeholder,
  key,
  inputContainerClassName,
  inputClassName,
}: {
  label?: string;
  optionsMenu?: { [key: string]: unknown }[];
  name?: string;
  placeholder?: string;
  key?: number | string;
  inputContainerClassName?: string;
  inputClassName?: string;
}) => {
  const [openMenu, setOpen] = React.useState<boolean>(false);

  return (
    <div key={key} className={`${inputContainerClassName}`}>
      {label && <h2>{label}</h2>}
      <div
        onClick={() => setOpen((prevState) => !prevState)}
        className={`${inputClassName}`}
      >
        <input
          disabled
          className={`w-[95%] outline-none placeholder:font-bold`}
          placeholder={placeholder}
          name={name}
        />
        <FontAwesomeIcon
          icon={faCaretDown}
          style={{
            color: "rgba(102,122,115,255)",
            transform: `${openMenu ? "rotate(180deg)" : "rotate(0deg)"}`,
            width: "5%",
          }}
        />
      </div>
      <ul
        className={`${
          openMenu
            ? "absolute block w-full overflow-y-auto border-[1px] border-textDefaultColor bg-white pl-[0.4em] text-textDefaultColor"
            : "hidden"
        }`}
      >
        {optionsMenu?.map((items, index) => {
          return (
            <li
              key={index}
              className={`cursor-pointer hover:bg-placeholder hover:text-white`}
            >
              {items?.label as string}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectField;
