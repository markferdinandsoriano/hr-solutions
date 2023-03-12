import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextField = ({
  inputClassName,
  inputContainerClassName,
  placeholder,
  withIcon,
  iconStyle,
}: {
  inputClassName?: string;
  inputContainerClassName?: string;
  placeholder?: string;
  withIcon?: boolean;
  iconStyle?: { [key: string]: unknown };
}) => {
  return (
    <div className={`${inputContainerClassName}`}>
      <input
        placeholder={placeholder}
        type="text"
        className={`${inputClassName}`}
      />
      {withIcon && <FontAwesomeIcon icon="search" style={{ ...iconStyle }} />}
    </div>
  );
};

export default TextField;
// { }
