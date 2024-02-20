import "./List.scss";
import { backwardSVG, forwardSVG, addSVG } from "../resources/svg";

const List = function () {
  return (
    <div className="list">
      <div className="toolbar">
        <span className="add-group">{addSVG} Add Group</span>
        <span className="undo">{backwardSVG} Undo</span>
        <span className="redo">{forwardSVG} Redo</span>
      </div>
    </div>
  );
};

export default List;
