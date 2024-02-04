import "./App.scss";
import Group from "./components/Group";

function App() {
  return (
    <div className={"app"}>
      <div className="header">
        <h1>header</h1>
      </div>
      <div className={"main"}>
        <Group />
      </div>
      <div className="details">
        <h1>details</h1>
      </div>
    </div>
  );
}

export default App;
