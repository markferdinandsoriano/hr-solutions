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

    case "bookmark":
      return (
        <td>
          <FontAwesomeIcon icon={faBookmark} style={{ ...styles }} />
        </td>
      );

    case "mobile":
      return (
        <td
          className={`py-[0.8em] px-[0.8em] font-semibold text-textDefaultColor ${textClassName}`}
        >
          <FontAwesomeIcon icon={faMobileScreenButton} style={{ ...styles }} />
        </td>
      );

    case "bookmark mobile":
      return (
        <td
          className={`py-[0.8em] px-[0.8em] font-semibold text-textDefaultColor ${textClassName}`}
        >
          <FontAwesomeIcon icon={faBookmark} style={{ ...styles }} />

          <FontAwesomeIcon icon={faMobileScreenButton} style={{ ...styles }} />
        </td>
      );
    case "normaltext":
      return (
        <td
          className={`py-[0.8em] px-[0.8em] font-semibold text-textDefaultColor ${textClassName}`}
        >
          {label}
        </td>
      );
    case "dateTime":
      return (
        <td
          className={`py-[0.8em] px-[0.8em] font-semibold text-textDefaultColor ${textClassName}`}
        >
          {label}
        </td>
      );

    case "info":
      console.log("infoo", styles);
      return (
        <td
          className={`py-[0.8em] px-[0.8em] font-semibold text-textDefaultColor ${textClassName}`}
        >
          <h1>{label}</h1>
          <FontAwesomeIcon icon={faCircleInfo} style={{ ...styles }} />
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
