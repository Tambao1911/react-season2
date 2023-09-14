import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import logo from "./logo.svg";
import "./App.scss";
import Nav from "./Layouts/components/Nav";
import Todo from "./Layouts/components/Todo";
import TableUser from "./Layouts/components/TableUser";
import CountDown from "./Layouts/CountDown";
import Blog from "./Layouts/components/Blog";
import DetailBlog from "./Layouts/components/Blog/DetailBlog";
import AddNewBlog from "./Layouts/components/Blog/AddNewBlog";
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <ToastContainer />
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
            <Route path='/addnewblog' element={< AddNewBlog />} />
            <Route path='*' element={< NotFound />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
