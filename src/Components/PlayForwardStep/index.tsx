import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faForwardStep } from "@fortawesome/free-solid-svg-icons";

const ForwardPlayIcons = ({
  forwardStepStyle,
  playStyle,
}: {
  forwardStepStyle?: { [key: string]: unknown };
  playStyle?: { [key: string]: unknown };
}) => {
  return (
    <React.Fragment>
      <FontAwesomeIcon icon={faForwardStep} style={{ ...forwardStepStyle }} />
      <FontAwesomeIcon icon={faPlay} style={{ ...playStyle }} />
    </React.Fragment>
  );
};

export default ForwardPlayIcons;
