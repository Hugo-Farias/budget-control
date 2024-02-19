import "./List.scss";

const List = function () {
  return (
    <div className="list">
      <div className="toolbar">
        <div className="add-group">Add Group</div>
        <div className="undo">Undo</div>
        <div className="redo">Redo</div>
      </div>
    </div>
  );
};

export default List;
