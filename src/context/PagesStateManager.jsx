import React, { createContext, useState } from "react";

// Createcontext
const PageContext = createContext();

const PageState = (props) => {
  // Page State for going through 5 different page layout
  const [page, setPage] = useState("baseone");

  // tab for selecting 3rd Page tab State
  const [tab, setTab] = useState(1);

  // Select module at page 2 and save the state for third page layout
  const [moduleNumber, setModuleNumber] = useState(0);

  // All the Modules Name shown in BaseTwo - 2nd Page Layout
  const moduleNames = [
    "Module One",
    "Module Two",
    "Module Three",
    "Module Four",
    "Module Five",
  ];

  const tabNames = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <PageContext.Provider
      value={{
        tabNames,
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
