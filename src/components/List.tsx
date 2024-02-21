import "./List.scss";
import { group } from "../types";
import { backwardSvg, forwardSvg, addSvg } from "../resources/svg";
import Group from "./Group";
import DUMMY from "../resources/DUMMYDATA.json";

const data: group[] = DUMMY;

const List = function () {
  const groupJSX = data.map((v, i) => {
    return (
      <Group
        key={i}
        openInitial={v.openInitial}
        title={v.title}
        childList={v.childList}
      />
    );
  });

  return (
    <div className="list">
      <div className="toolbar">
        <span className="add-group">{addSvg} Add Group</span>
        <span className="undo">{backwardSvg} Undo</span>
        <span className="redo">{forwardSvg} Redo</span>
      </div>
      <div className="groups">{groupJSX}</div>
    </div>
  );
};

export default List;
