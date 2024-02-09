import "./App.scss";
import Group from "./components/Group";

function App() {
  return (
    <div className={"app"}>
      <header className="header">
        <h1>header</h1>
      </header>
      <div className="main">
        <div className={"list"}>
          <Group />
        </div>
        <div className="details">
          <h1>details</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
