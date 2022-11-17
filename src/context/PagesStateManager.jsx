import React, { createContext, useState } from "react";

// Createcontext
const PageContext = createContext();

const PageState = (props) => {
  const [page, setPage] = useState("baseone");
  const [tab, setTab] = useState(1);
  const [moduleNumber, setModuleNumber] = useState(0);

  const moduleNames = [
    "Module One",
    "Module Two",
    "Module Three",
    "Module Four",
    "Module Five",
  ];

  return (
    <PageContext.Provider
      value={{
        moduleNames,
        page,
        setPage,
        tab,
        setTab,
        moduleNumber,
        setModuleNumber,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageState;
export { PageContext };
