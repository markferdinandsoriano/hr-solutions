import TextField from "src/Components/TextField";
import SelectField from "src/Components/SelectField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBookmark,
  faMobileScreenButton,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

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
  inputWidth,
  iconContainerWidth,
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
  inputWidth?: string;
  iconContainerWidth?: string;
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
          inputWidth={inputWidth}
          iconContainerWidth={iconContainerWidth}
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

    case "bookmark":
      return (
        <td
          className={`flex  flex-row items-center text-left font-semibold  ${textClassName}`}
        >
          <FontAwesomeIcon icon={faBookmark} style={{ color: "#000000" }} />
        </td>
      );

    case "mobile":
      return (
        <td
          className={`flex flex-row items-center text-left font-semibold ${textClassName}`}
        >
          <FontAwesomeIcon
            icon={faMobileScreenButton}
            style={{ color: "#000000" }}
          />
        </td>
      );

    case "bookmark mobile":
      return (
        <td
          className={`flex flex-row items-center gap-2 font-semibold text-textDefaultColor ${textClassName}`}
        >
          <p className="font-semibold text-textDefaultColor">
            <FontAwesomeIcon icon={faBookmark} style={{ color: "#000000" }} />
          </p>
          <p className="font-semibold text-textDefaultColor">
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              style={{ color: "#000000" }}
            />
          </p>
        </td>
      );
    case "normaltext":
      return (
        <td className={`font-bold text-textDefaultColor ${textClassName}`}>
          {label}
        </td>
      );

    case "headerText":
      return (
        <td className={`font-medium text-lightBlack ${textClassName}`}>
          {label}
        </td>
      );
    case "dateTime":
      const labelSplit = label?.split(",");
      return (
        <td className={`${textClassName}`}>
          <p className="font-semibold text-textDefaultColor">
            {labelSplit?.[0]}
          </p>
          <p className="font-extrabold text-gray">{labelSplit?.[1]}</p>
        </td>
      );

    case "info":
      return (
        <td
          className={`flex flex-row items-center gap-4 font-medium text-lightBlack ${textClassName}`}
        >
          <h1>{label}</h1>
          <span>
            <FontAwesomeIcon icon={faCircleInfo} style={{ ...styles }} />
          </span>
        </td>
      );

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
