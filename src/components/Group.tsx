import "./Group.scss";
import { arrowLeftSvg } from "../resources/svg";
import { useState } from "react";
import { group } from "../types";

const Group = function ({ openInitial, childList, title }: group) {
  const [open, setOpen] = useState(openInitial);

  let childListJSX = null;
  if (childList) {
    childListJSX = childList.map((value, index) => {
      return <div key={index}>{value.title}</div>;
    });
  }

  return (
    <>
      <div className={`group ${open}`} onClick={() => setOpen((prev) => !prev)}>
        <div className="title">
          {arrowLeftSvg}
          {title}
        </div>
        <div className={`child-list ${open}`}>
          {childListJSX ? childListJSX : ""}
        </div>
      </div>
    </>
  );
};

export default Group;
