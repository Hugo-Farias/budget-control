import "./List.scss";
import { backwardSvg, forwardSvg, addSvg } from "../resources/svg";
import Group from "./Group";

const List = function () {
  return (
    <div className="list">
      <div className="toolbar">
        <span className="add-group">{addSvg} Add Group</span>
        <span className="undo">{backwardSvg} Undo</span>
        <span className="redo">{forwardSvg} Redo</span>
      </div>
      <div className="groups">
        <Group openInitial={false} title={"Isaque"} />
      </div>
    </div>
  );
};

export default List;
