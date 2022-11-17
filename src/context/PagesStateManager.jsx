import React, { createContext, useState } from "react";

// Createcontext
const PageContext = createContext();

const PageState = (props) => {
  const [page, setPage] = useState("baseone");
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageState;
export { PageContext };
