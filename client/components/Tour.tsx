import React from "react";
import Joyride, { Props } from "react-joyride";

const Tour: React.FunctionComponent<Props> = (props) => (
  <Joyride
    {...props}
    locale={{
      back: "Retour",
      close: "Fermer",
      last: "Fin",
      next: "Suivant",
      skip: "Sauter",
    }}
    styles={{
      tooltipContainer: {
        textAlign: "left",
      },
    }}
  />
);

export default Tour;
