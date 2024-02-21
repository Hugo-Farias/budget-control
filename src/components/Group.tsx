import "./Group.scss";
import { arrowLeftSvg } from "../resources/svg";
import { useState } from "react";
import { group } from "../types";

const Group = function (props: group) {
  const [open, setOpen] = useState(props.openInitial);

  return (
    <div className={`group ${open}`} onClick={() => setOpen((prev) => !prev)}>
      <div className="title">
        {arrowLeftSvg}
        {props.title}
      </div>
    </div>
  );
};

export default Group;
