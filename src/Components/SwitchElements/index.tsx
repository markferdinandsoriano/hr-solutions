import React from "react";
import TextField from "src/Components/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SwitchElemets = ({
  type,
  className,
}: {
  type: string;
  className: string;
}) => {
  switch (type) {
    case "input":
      return <TextField className={className} />;

    case "search":
      return <FontAwesomeIcon icon="check" />;
  }
};

export default SwitchElemets;
