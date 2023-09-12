import logo from "./logo.svg";
import "./App.scss";
import Nav from "./Layouts/components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Học React Nào</p>
      </header>
    </div>
  );
}

export default App;
