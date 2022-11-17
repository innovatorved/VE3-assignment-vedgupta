import React, { useContext } from "react";

import { PageContext } from "../context/PagesStateManager";

export default function BaseThree() {
  const { moduleNumber, tab } = useContext(PageContext);

  return <div>Hello</div>;
}
