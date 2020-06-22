import React, { useState, useEffect } from "react";
import Joyride, { Props } from "react-joyride";

const Tour: React.FunctionComponent<Props> = (props) => {
  const [run, setRun] = useState(false);
  useEffect(() => {
    setTimeout(() => setRun(true), 300);
  }, []);
  return (
    <Joyride
      {...props}
      run={run}
      showSkipButton={true}
      locale={{
        back: "Retour",
        close: "Fermer",
        last: "Fin",
        next: "Suivant",
        skip: "Quitter",
      }}
      styles={{
        tooltipContainer: {
          textAlign: "left",
        },
      }}
    />
  );
};

export default Tour;
