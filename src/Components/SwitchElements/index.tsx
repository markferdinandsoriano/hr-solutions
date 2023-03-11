import TextField from "src/Components/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SwitchElemets = ({
  type,
  className,
  styles,
  label,
  placeholder,
  textClassName,
}: {
  type?: string;
  className?: string | undefined;
  styles?: { [key: string]: unknown };
  label?: string;
  placeholder?: string;
  textClassName?: string;
}) => {
  switch (type) {
    case "input":
      return <TextField className={className} placeholder={placeholder} />;

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
