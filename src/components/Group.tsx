import "./Group.scss";
import { arrowLeftSvg } from "../resources/svg";
import { useState } from "react";
import { group } from "../types";

const Group = function ({ openInitial, childList, title }: group) {
  const [open, setOpen] = useState(openInitial);

  let childListJSX = null;
  if (childList) {
    childListJSX = childList.map((value, index) => {
      return (
        <div draggable={true} key={index}>
          {value.title}
        </div>
      );
    });
  }

  const clickHandler = function () {
    return childList ? setOpen((prev) => !prev) : null;
  };

  return (
    <>
      <div className={`group ${open} ${!childList ? "empty" : ""}`}>
        <div draggable={true} className="title" onClick={clickHandler}>
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
