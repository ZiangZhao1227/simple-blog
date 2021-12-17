import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogdetails from "./components/Blogdetails";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<Blogdetails />} />
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
