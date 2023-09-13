import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import Nav from "./Layouts/components/Nav";
import Todo from "./components/Todo";
import TableUser from "./Layouts/components/TableUser";
import CountDown from "./Layouts/CountDown";
import Blog from "./Layouts/components/Blog";
import DetailBlog from "./Layouts/components/Blog/DetailBlog";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path='/' element={<TableUser />} />
            <Route path='/timer' element={<CountDown />} />
            <Route path='/todo' element={< Todo />} />
            <Route path='/blog' element={< Blog />} />
            <Route path='/secret' element={< Todo />} />
            <Route path='/blog/:id' element={< DetailBlog />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
