import React, { createContext, useState, useEffect } from "react";

// Createcontext
const PageContext = createContext();

const PageState = (props) => {
  // Page State for going through 5 different page layout
  const [page, setPage] = useState("baseone");

  // useEffect for changing css if we change pages
  useEffect(() => {
    // Refresh previous select value for module if user come to page2 - basetwo
    if (page === "basetwo") {
      setModuleNumber(0);
    }

    // change background color for search page
    if (page === "basefour") {
      document.getElementById("root").style.background = "rgb(32, 93, 149)";
    } else {
      document.getElementById("root").style.background = "rgb(245, 245, 245)";
    }
  }, [page]);

  // tab for selecting 3rd Page tab State
  const [tab, setTab] = useState(1);

  // Select module at page 2 and save the state for third page layout
  const [moduleNumber, setModuleNumber] = useState(0);

  // Loading - state
  const [loader, setLoader] = useState(false);

  // All the Modules Name shown in BaseTwo - 2nd Page Layout
  const moduleNames = [
    "Module One",
    "Module Two",
    "Module Three",
    "Module Four",
    "Module Five",
  ];

  // All the module information of Third Page
  const moduleInfo = {
    "Module One": {
      "Tab 1": {
        h: "Morbi arcu libero",
        p: "Nunc vel lacinia nibh. Sed vitae elementum tortor. Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia non urna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque.",
        img: "m1t1.png",
      },
      "Tab 2": {
        h: "Ut hendrerit est toth",
        p: "Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia nonurna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque.",
        img: "m1t2.png",
      },
      "Tab 3": {
        h: "Ut hendrerit est tovegh",
        p: "Phasellus sapien sem, facilisis sed ante vel, cursus sollicitudin massa. Ut ut tincidunt leo, at suscipit nisl. Etiam faucibus hendrerit nibh quis suscipit. Proin ut enim ipsum. Cras varius augue erat, vel fringilla est efficitur id. Duis ut venenatis purus.",
        img: "m1t3.png",
      },
    },
    "Module Two": {
      "Tab 1": {
        h: "Morbi arcu libero",
        p: "Nunc vel lacinia nibh. Sed vitae elementum tortor. Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia non urna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque.",
        img: "m2t1.png",
      },
      "Tab 2": {
        h: "Ut hendrerit est toth",
        p: "Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia nonurna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque.",
        img: "m2t2.png",
      },
      "Tab 3": {
        h: "Ut hendrerit est tovegh",
        p: "Phasellus sapien sem, facilisis sed ante vel, cursus sollicitudin massa. Ut ut tincidunt leo, at suscipit nisl. Etiam faucibus hendrerit nibh quis suscipit. Proin ut enim ipsum. Cras varius augue erat, vel fringilla est efficitur id. Duis ut venenatis purus.",
        img: "m2t3.png",
      },
    },
    "Module Three": {
      "Tab 1": {
        h: "Morbi arcu libero",
        p: "Nunc vel lacinia nibh. Sed vitae elementum tortor. Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et. Vestibulum vitae maximus dolor. Suspendisse lacinia non urna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque.",
        img: "m3t1.png",
      },
      "Tab 2": {
        h: "Ut hendrerit est toth",
        p: "Fusce sem magna, pharetra vel cursus sed, egestas gravida sem. Nam ullamcorper diam a cursus placerat. Integer consequat maximus diam, ut bibendum nisi dapibus et Vestibulum vitae maximus dolor. Suspendisse lacinia non urna at dignissim. Ut neque massa, viverra ut arcu eu, ultricies efficitur neque.",
        img: "m3t2.png",
      },
      "Tab 3": {
        h: "Ut hendrerit est tovegh",
        p: "Phasellus sapien sem, facilisis sed ante vel, cursus sollicitudin massa. Ut ut tincidunt leo, at suscipit nisl. Etiam faucibus hendrerit nibh quis suscipit. Proin ut enim ipsum. Cras varius augue erat, vel fringilla est efficitur id. Duis ut venenatis purus.",
        img: "m3t3.png",
      },
    },
    "Module Four": {
      "Tab 1": {
        h: "",
        p: "",
        img: "",
      },
      "Tab 2": {
        h: "",
        p: "",
        img: "",
      },
      "Tab 3": {
        h: "",
        p: "",
        img: "",
      },
    },
    "Module Five": {
      "Tab 1": {
        h: "",
        p: "",
        img: "",
      },
      "Tab 2": {
        h: "",
        p: "",
        img: "",
      },
      "Tab 3": {
        h: "",
        p: "",
        img: "",
      },
    },
  };

  const tabNames = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <PageContext.Provider
      value={{
        loader,
        setLoader,
        tabNames,
        moduleNames,
        moduleInfo,
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
