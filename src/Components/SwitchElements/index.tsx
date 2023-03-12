import TextField from "src/Components/TextField";
import SelectField from "src/Components/SelectField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SwitchElemets = ({
  type,
  styles,
  label,
  placeholder,
  textClassName,
  withIcon,
  iconStyle,
  optionsMenu,
  inputContainerClassName,
  inputClassName,
}: {
  type?: string;
  styles?: { [key: string]: unknown };
  label?: string;
  placeholder?: string;
  textClassName?: string;
  withIcon?: boolean;
  iconStyle?: { [key: string]: unknown };
  optionsMenu?: { [key: string]: unknown }[];
  inputContainerClassName?: string;
  inputClassName?: string;
}) => {
  switch (type) {
    case "input":
      return (
        <TextField
          inputContainerClassName={inputContainerClassName}
          inputClassName={inputClassName}
          placeholder={placeholder}
          withIcon={withIcon}
          iconStyle={{ ...iconStyle }}
        />
      );

    case "select":
      return (
        <SelectField
          placeholder={placeholder}
          optionsMenu={optionsMenu}
          inputContainerClassName={inputContainerClassName}
          inputClassName={inputClassName}
        />
      );

    case "search":
      return <FontAwesomeIcon icon="search" style={{ ...styles }} />;

    case "bell":
      return <FontAwesomeIcon icon="bell" style={{ ...styles }} />;

    case "circle":
      return <FontAwesomeIcon icon="circle" style={{ ...styles }} />;

    default:
      return (
        <span className="flex h-auto w-full flex-row items-center justify-start gap-2">
          <h1 className={`${textClassName}`}>{label}</h1>
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{
              ...styles,
            }}
          />
        </span>
      );
  }
};

export default SwitchElemets;
