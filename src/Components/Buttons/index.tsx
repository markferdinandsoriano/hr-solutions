import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const Button = ({
  label,
  buttonContainerClass,
  buttonClass,
  iconStyles,
}: {
  label?: string;
  buttonContainerClass?: string;
  buttonClass?: string;
  iconStyles?: { [key: string]: unknown };
}) => {
  return (
    <div className={`${buttonContainerClass}`}>
      <FontAwesomeIcon icon={faAdd} style={{ ...iconStyles }} />
      <button className={`${buttonClass}`}>{label}</button>
    </div>
  );
};

export default Button;
